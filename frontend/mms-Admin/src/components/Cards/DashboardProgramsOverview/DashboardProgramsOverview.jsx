import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./DashboardProgramsOverview.module.scss";

function DashboardProgramsOverview({ data, onClick }) {
  return (
    <div onClick={onClick} className={cx(styles.dashboardProgramsOverviewContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={data?.icon} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.title}</h5>
          <div className={cx(styles.statistics, "flexRow-align-center")}>
            <span className={cx(styles.percentValue)}>{data?.value}</span>
            <span className={cx(styles.indicator)}>{}</span>
          </div>
        </div>
      </div>
      <small className={cx(styles.date)}>{data?.date}</small>
    </div>
  );
}

DashboardProgramsOverview.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
};

export default DashboardProgramsOverview;
