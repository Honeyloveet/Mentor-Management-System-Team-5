﻿using System;
namespace mms.Application.Account.PasswordReset
{
	public class ForgetPasswordResponseDto
	{
        public string Email { get; set; }
        public string Token { get; set; }
    }
}

