import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./Search.module.scss";
import PropTypes from "prop-types";
import searchIcon from "@/assets/icons/search-icon-green.png";
import closeIcon from "@/assets/icons/close-icon.png";
// import clearIcon from "@/assets/icons/clear-list-reversed.svg";

const Search = ({
  onSearchClick,
  onChange,
  inputPlaceholder,
  expanded,
  collapseInput,
  setCollapseInput,
  closeSelectElement
}) => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange(value);
  };

  useEffect(() => {
    if (collapseInput) {
      setInputValue("");
      setToggle(false);
    }
  }, [collapseInput]);

  const handleToggle = (value) => {
    setToggle(value);
    value ? setCollapseInput(false) : setCollapseInput(true);
    closeSelectElement(true);
  };

  return (
    <div className={cx(styles.searchContainer, "flexRow")}>
      <div
        className={cx(
          styles.inputDiv,
          "flexRow-align-center",
          toggle && !collapseInput ? styles.showInput : styles.hideInput,
          expanded && styles.expanded
        )}
      >
        <div className={cx(styles.mainGroup, "flexRow")}>
          <img onClick={onSearchClick} src={searchIcon} alt='search-icon' className={cx(styles.icon)} />

          <input
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            className={cx(styles.searchInput)}
            type='text'
            placeholder={inputPlaceholder}
          />

          {/* <img
            onClick={() => handleInputChange("")}
            className={cx(styles.clearListIcon)}
            src={clearIcon}
            alt='clear-icon'
          /> */}
        </div>

        {!expanded && (
          <img
            src={closeIcon}
            alt='close-icon'
            className={cx(styles.closeIcon)}
            onClick={() => {
              handleToggle(false);
            }}
          />
        )}
      </div>

      {!expanded && !toggle && (
        <div className={cx(styles.togglerGroup, "flexRow-align-center")}>
          {
            <img
              src={searchIcon}
              alt='search-icon'
              className={cx(styles.icon)}
              onClick={() => {
                handleToggle(true);
              }}
            />
          }
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  inputPlaceholder: PropTypes.string,
  expanded: PropTypes.bool,
  onSearchClick: PropTypes.func,
  reversed: PropTypes.bool,
  collapseInput: PropTypes.bool,
  setCollapseInput: PropTypes.func,
  closeSelectElement: PropTypes.func
};

Search.defaultProps = {
  reversed: false,
  expanded: false,
  setCollapseInput: () => {},
  collapseInput: false,
  closeSelectElement: () => {}
};

export default Search;
