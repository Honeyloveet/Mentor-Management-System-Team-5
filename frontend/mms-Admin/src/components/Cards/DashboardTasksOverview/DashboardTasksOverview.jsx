import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./DashboardTasksOverview.module.scss";

function DashboardTasksOverview({ data }) {
  return (
    <div className={cx(styles.dashboardTasksOverviewContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <data.icon className={cx(styles.icon)} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.title}</h5>
          <div className={cx(styles.metaData, "flexRow")}>
            <img className={cx(styles.dateIcon)} src={data?.calendarIcon} alt='calendar-icon' />
            <span className={cx(styles.date)}>{data?.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardTasksOverview.propTypes = {
  data: PropTypes.object
};

export default DashboardTasksOverview;
