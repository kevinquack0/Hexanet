using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domanin;
using Microsoft.AspNetCore.Identity;
namespace Domain
{
    public class AppUser : IdentityUser
    {
        public String DisplayName { get; set; }

        public String Bio { get; set; }

        public ICollection<ActivityAttendee> Activities { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public ICollection<UserFollowing> Followings { get; set; }

        public ICollection<UserFollowing> Followers { get; set; }
    }
}