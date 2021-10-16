using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using System.Threading;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> { }


        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            public DataContext _context { get; }
            public Handler(DataContext context)
            {
                _context = context;
            }
            //return await _context.Activities.ToListAsync();



            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Activity>>.Sucess(await _context.Activities.ToListAsync());
            }
        }
    }
}