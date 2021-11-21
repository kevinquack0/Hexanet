using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Activities;

namespace Application.Profiles
{
    public class ListActivities
    {
        public class Query : IRequest<Result<List<UserActivityDto>>>
        {
            public string Username { get; set; }

            public string Predicate { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<UserActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {

                _mapper = mapper;
                _context = context;
            }
            public async Task<Result<List<UserActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {

                var query = _context.ActivityAttendees
                .Where(u => u.AppUser.UserName == request.Username)
                .OrderBy(a => a.Activity.Date)
                .ProjectTo<UserActivityDto>(_mapper.ConfigurationProvider)
                .AsQueryable();







                var more = query.Where(a => a.Date > DateTime.Now);
                var less = query.Where(a => a.Date < DateTime.Now);
                var equal = query.Where(a => a.HostUsername == request.Username);
                if (request.Predicate.Equals("past"))
                {
                    //relationship = "is earlier than";


                    return Result<List<UserActivityDto>>.Sucess(await less.ToListAsync());
                }
                else if (request.Predicate.Equals("hosting"))
                {
                    return Result<List<UserActivityDto>>.Sucess(await equal.ToListAsync());
                }
                else
                {
                    return Result<List<UserActivityDto>>.Sucess(await more.ToListAsync());
                }




            }
        }
    }

}

