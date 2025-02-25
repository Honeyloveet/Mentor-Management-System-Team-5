import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./DeleteNotification.module.scss";

import successImage from "@/assets/images/task-delete-success.png";

import Button from "@/components/Button/Button";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router-dom";

function DeleteNotification({ show, size, modalName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalData = useSelector((state) => state.modal.modalData);

  const handleClick = () => {
    dispatch(hideModal({ name: "taskDeleteNotification" }));
    modalData?.redirectUrl && navigate(modalData?.redirectUrl);
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>{modalData?.title}</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <img className={cx(styles.successImage)} src={successImage} alt='notification-image' />
        </div>

        <div className={cx(styles.modalFooter)}>
          <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
            {/* <Button onClick={handleClick} title='Undo' type='secondary' /> */}
            <Button onClick={handleClick} title='Done' />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

DeleteNotification.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default DeleteNotification;
