using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using Domanin;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Activity Activity { get; set; }


        }


        public class CommandValidator : AbstractValidator<Command>
        {

            public CommandValidator()
            {

                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            public DataContext _context { get; }
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {

                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                var attendee = new ActivityAttendee
                {
                    AppUser = user,
                    Activity = request.Activity,
                    IsHost = true,
                };


                request.Activity.Attendees.Add(attendee);


                _context.Activities.Add(request.Activity); //add new activities
                var result = await _context.SaveChangesAsync() > 0; //save changes

                if (!result)
                {
                    return Result<Unit>.Failure("Failed to create activity");
                }
                return Result<Unit>.Sucess(Unit.Value); // return success
            }
        }
    }
}