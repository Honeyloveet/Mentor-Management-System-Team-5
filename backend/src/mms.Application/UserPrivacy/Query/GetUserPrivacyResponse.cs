﻿namespace mms.Application.UserPrivacy.Query
{
    public class GetUserPrivacyResponse
    {
        public bool ShowContactInfo { get; set; }
        public bool ShowGithub { get; set; }
        public bool ShowInstagram { get; set; }
        public bool ShowLinkedIn { get; set; }
        public bool ShowTwitter { get; set; }
    }
}