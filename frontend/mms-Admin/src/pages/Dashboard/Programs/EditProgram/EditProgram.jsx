import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./EditProgram.module.scss";
import Button from "@/components/Button/Button";
import { ReactComponent as ClearListIcon } from "@/assets/icons/clear-list-icon.svg";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import closeIcon from "@/assets/icons/undo-icon.svg";
import closeIconAlt from "@/assets/icons/close-icon.svg";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";

import { showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/create-task-success-image.svg";
import { editProgramSchema } from "@/helpers/validation";
import PersonelComponent from "@/pages/Dashboard/Tasks/PersonelComponent/PersonelComponent";
import mentorManagerImage from "@/assets/images/mentor-manager-thumbnail.svg";
import mentorImage from "@/assets/images/sample-profile-image.svg";
import programAvatar from "@/assets/images/program-avatar.svg";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

function EditProgram() {
  const navigate = useNavigate();

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });
  const [collapseInput, setCollapseInput] = useState(true);
  const [closeSelectElement, setCloseSelectElement] = useState(false);
  const dispatch = useDispatch();

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const mentorsArray = [
    {
      id: 1,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 6,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 7,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 8,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 9,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 10,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
  ];

  const mentorManagersArray = [
    {
      id: 1,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
  ];

  const resolver = yupResolver(editProgramSchema);

  const defaultValues = {
    title: "",
    details: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const sendMessage = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Program Saved Successfully!",
          image: successImage,
          redirectUrl: "/dashboard/programs"
        }
      })
    );
    localStorage.removeItem("criteria");
  };

  const handleOpenSideBar = (e, open, category) => {
    e.preventDefault();
    setOpenSideBar({ open, category });
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSearchInput = (e) => {
    console.log(e, "handle close input");
    setCollapseInput(true);
  };

  const handleCloseSelectElement = (e) => {
    console.log(e, "handle close select");
    setCloseSelectElement(true);
  };

  const getListComponents = (data) => {
    const listItems = data.map((item, index) => {
      return {
        component: <PersonelComponent key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
      <div className={cx(styles.filterAndSearchDiv, "flexRow-align-center")}>
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder='Search for mentor...'
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
            closeSelectElement={handleCloseSelectElement}
          />
        </div>
        <Filter
          dropdownItems={[
            { name: "All", id: 1 },
            { name: "Mentors", id: 2 },
            { name: "Mentor Managers", id: 3 }
          ]}
          selectedFilterItem={handleSelectedFilterItem}
          closeSearchInput={handleCloseSearchInput}
          closeSelectElement={closeSelectElement}
          setCloseSelectElement={setCloseSelectElement}
        />
        <img
          src={closeIcon}
          className={cx(styles.closeIcon)}
          alt='close-icon'
          onClick={() => setOpenSideBar({ open: false })}
        />
      </div>
    );

    return { listItems, headerComponent };
  };

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  const [uploadedFile, setUploadedFile] = useState({
    file: "",
    imagePreviewUrl: ""
  });

  const onDrop = useCallback((acceptedFiles) => {
    let file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps } = useDropzone({ onDrop, accept: "image/*" });

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropzoneClick = (e) => {
    e.preventDefault();
  };

  const handleEditCriteria = (e) => {
    e.preventDefault();
    navigate("edit-criteria");
  };

  return (
    <div className={cx(styles.editProgramContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexRow-space-between")}>
          <h3 className={cx(styles.title)}>Edit Program</h3>
          <img src={closeIconAlt} alt='close-icon' onClick={() => navigate("/dashboard/programs")} />
        </div>

        <div className={cx(styles.formWrapper, "flexCol")}>
          <form onSubmit={handleSubmit((data) => sendMessage(data))}>
            <div className={cx(styles.headerWrapper, "flexRow")}>
              <div className={cx(styles.leftSection, styles.imageDiv)}>
                <img
                  {...getRootProps({ onDragOver: handleDragOver, onClick: handleDropzoneClick })}
                  src={uploadedFile?.imagePreviewUrl ? uploadedFile?.imagePreviewUrl : programAvatar}
                  alt='profile-image'
                />
              </div>
              <div className={cx(styles.rightSection, "flexCol")}>
                <h5 className={cx(styles.title)}>Set Program Avatar</h5>
                <Button
                  {...getRootProps({ onDragOver: handleDragOver, onClick: handleDropzoneClick })}
                  title='Select file'
                  size='small'
                  type='secondary'
                />
              </div>
            </div>

            <label htmlFor='title'>Program Name</label>
            <Controller
              name='programName'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  placeholder='Enter program name'
                  type='text'
                  error={errors?.programName && errors?.programName?.message}
                />
              )}
            />

            <label htmlFor='details'>Program Description</label>
            <Controller
              name='programDescription'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder='Enter description'
                  minHeight='150px'
                  error={errors?.programDescription && errors?.programDescription?.message}
                />
              )}
            />

            <div className={cx(styles.selectionDiv, "flexRow-space-between")}>
              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor Manager</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>10 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor-manager")} />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>5 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor")} />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Set Criteria</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>5 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleEditCriteria(e)} />
              </div>
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => sendMessage(data))}
                // loading={loading}
                // disabled={loading}
                title='Save Changes'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {openSideBar.open && openSideBar.category === "mentor-manager" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorManagersArray)} />
        </div>
      ) : openSideBar.open && openSideBar.category === "mentor" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorsArray)} />
        </div>
      ) : null}

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default EditProgram;
