﻿using Microsoft.AspNetCore.Authorization;

namespace mms.Infrastructure.Policy
{
    public static class Policies
    {
        private const string _mentor = "Mentor";
        private const string _manager = "Manager";
        private const string _admin = "Admin";

        public static string Mentor { get; set; } = _mentor;
        public static string Admin { get; set; } = _admin;
        public static string Manager { get; set; } = _manager;

        public static AuthorizationPolicy MentorPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Mentor).Build();
        }

        public static AuthorizationPolicy ManagerPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Manager).Build();
        }

        public static AuthorizationPolicy AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Admin).Build();
        }
    }
}