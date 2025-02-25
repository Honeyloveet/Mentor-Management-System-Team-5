﻿using mms.Application.Profile.Query.GetProfileById;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Application.UserNotification.Query;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Application.UserPrivacy.Query;
using UserNotificationEntity = mms.Domain.Entities.UserNotification;
using UserPrivacyEntity = mms.Domain.Entities.UserPrivacy;
using SupportEntity = mms.Domain.Entities.Support;
using ProgrammeEntity = mms.Domain.Entities.Program;
using mms.Application.Support.Command;
using AppUserEntity = mms.Domain.Entities.AppUser;
using FAQEntity = mms.Domain.Entities.FAQ;
using mms.Application.FAQ.Command;
using mms.Application.FAQ.Query;
using Reports = mms.Domain.Entities.Report;
using mms.Application.UserTasks.Query;
using mms.Domain.Entities;
using mms.Application.Programme.Query;
using mms.Application.Report.Query;
using mms.Application.Mentors.Query;
using mms.Application.MentorManagers.Query;
using mms.Application.UserTasks.Command.CreateTask;
using mms.Application.Report.Command;
using mms.Application.UserTasks.Command.UpdateTask;
using mms.Application.Programs.Query.ArchivedPrograms;
using mms.Application.Common.DTOs.Mentors;
using mms.Application.Programs.Command.CreateProgram;
using mms.Application.Programs.Command.UpdateTask;
using mms.Application.UserTasks.Command.DeleteTask;

namespace mms.Application.Common.Mapper
{
    public class AutoMapperInitializer : AutoMapper.Profile
    {
        public AutoMapperInitializer()
        {
            CreateMap<UserNotificationEntity, EditUserNotificationCommand>().ReverseMap();
            CreateMap<UserNotificationEntity, GetUserNotificationResponse>().ReverseMap();

            CreateMap<UserPrivacyEntity, EditUserPrivacyCommand>().ReverseMap();
            CreateMap<UserPrivacyEntity, GetUserPrivacyResponse>().ReverseMap();

            CreateMap<SupportEntity, AddSupportCommand>().ReverseMap();

            CreateMap<ProgrammeEntity, GetArchiveProgramsResponse>().ReverseMap();

            CreateMap<AppUserEntity, GetProfileByIdResponse>().ReverseMap();

            CreateMap<UserTask, GetUserTasksResponse>().ReverseMap();
            CreateMap<UserTask, CreateTaskCommand>().ReverseMap();
            CreateMap<UserTask, PutUserTaskCommand>().ReverseMap();
            CreateMap<UserTask, GetTaskByIdCommand>().ReverseMap();
            CreateMap<UserTask, DeleteTaskCommand>().ReverseMap();

            CreateMap<ProgrammeEntity, GetProgrammeResponse>().ReverseMap();
            CreateMap<ProgrammeEntity, CreateProgrammeCommand>().ReverseMap();
            CreateMap<ProgrammeEntity, PutProgramCommand>().ReverseMap();

            CreateMap<Reports, GetReportsResponse>().ReverseMap();
            CreateMap<Reports, CreateReportCommand>().ReverseMap();
            CreateMap<Reports, PutReportCommand>().ReverseMap();

            CreateMap<ProgramsMentor, GetMentorsResponse>().ReverseMap();
            CreateMap<MentorManager, GetMentorManagersResponse>().ReverseMap();

            //Mapping Domain Object to dto
            CreateMap<ProgramsMentor, MentorDTO>().ReverseMap();
            CreateMap<MentorManager, MentorManagerDTO>().ReverseMap();
            CreateMap<CreateTaskCommand,List<string>>().ReverseMap();
            CreateMap<CreateTaskCommand, List<string>>().ReverseMap();
            CreateMap<UserTask, List<MentorManager>>().ReverseMap();
            CreateMap<UserTask, List<ProgramsMentor>>().ReverseMap();
            CreateMap<UserTask, List<MentorManagerDTO>>().ReverseMap();
            CreateMap<UserTask, List<MentorDTO>>().ReverseMap();
            CreateMap<CreateProgrammeCommand, List<string>>().ReverseMap();
            CreateMap<CreateProgrammeCommand, List<string>>().ReverseMap();

            CreateMap<ProgrammeEntity, List<MentorManager>>().ReverseMap();
            CreateMap<ProgrammeEntity, List<ProgramsMentor>>().ReverseMap();
            CreateMap<ProgrammeEntity, List<MentorManagerDTO>>().ReverseMap();
            CreateMap<ProgrammeEntity, List<MentorDTO>>().ReverseMap();

            CreateMap<FAQEntity, PostFAQCommand>().ReverseMap();
            CreateMap<FAQEntity, PutFAQCommand>().ReverseMap();
            CreateMap<FAQEntity, GetFAQsResponse>().ReverseMap();
        }
    }
}