import React from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./TasksOverview.module.scss";
import Button from "@/components/Button/Button";

import { ReactComponent as CardIcon } from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";

import DashboardTasksOverviewCard from "@/components/Cards/DashboardTasksOverview/DashboardTasksOverview";

function TasksOverview() {
  const navigate = useNavigate();

  const cardDataArray = [
    {
      title: "Google Africa Scholarship...",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: CardIcon,
      calendarIcon
    },
    {
      title: "Google Africa Scholarship...",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: CardIcon,
      calendarIcon
    },
    {
      title: "Google Africa Scholarship...",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: CardIcon,
      calendarIcon
    }
  ];

  return (
    <div className={cx(styles.tasksOverviewContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <h6 className={cx(styles.leftSection)}>Tasks Overview</h6>
      </div>

      <div className={cx(styles.taskWrapper, "flexCol")}>
        <div className={cx(styles.top, "flexRow")}>
          <div className={cx(styles.titleDiv, "flexRow")}>
            <p className={cx(styles.title)}>In Progress</p>
          </div>
          <div className={cx(styles.cardsGroupDiv, "flexCol")}>
            <div className={cx(styles.cardsGroup)}>
              {cardDataArray.map((item, index) => (
                <DashboardTasksOverviewCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={cx(styles.btnDiv, "flexRow")}>
          <Button onClick={() => navigate("tasks")} title='View All' type='primary' size='small' />
        </div>
      </div>

      <div className={cx(styles.taskWrapper, "flexCol")}>
        <div className={cx(styles.top, "flexRow")}>
          <div className={cx(styles.titleDiv, "flexRow")}>
            <p className={cx(styles.title)}>Completed</p>
          </div>
          <div className={cx(styles.cardsGroupDiv, "flexCol")}>
            <div className={cx(styles.cardsGroup)}>
              {cardDataArray.map((item, index) => (
                <DashboardTasksOverviewCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={cx(styles.btnDiv, "flexRow")}>
          <Button onClick={() => navigate("tasks")} title='View All' type='primary' size='small' />
        </div>
      </div>
    </div>
  );
}

export default TasksOverview;
