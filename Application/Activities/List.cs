using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using System.Threading;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }


        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            public DataContext _context { get; }
            public Handler(DataContext context)
            {
                _context = context;
            }
            //return await _context.Activities.ToListAsync();



            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}