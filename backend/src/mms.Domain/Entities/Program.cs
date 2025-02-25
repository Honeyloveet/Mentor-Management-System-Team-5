﻿using mms.Domain.Common;
using mms.Domain.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace mms.Domain.Entities
{
    public class Program : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public ProgramStatus Status { get; set; }
        public string ArchivedBy { get; set; }
        public string ProgrammePicture { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateCompleted { get; set; }
        public DateTime? DateArchived { get; set; }
        [Column(TypeName = "json")]
        public string Criteria { get; set; }
        public IList<Report> Reports { get; set; }
        public IList<MentorManager> MentorManagers { get; set; } 
        public IList<ProgramsMentor> Mentors { get; set; } 

    }
}