import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Styles from "./CityInfo.module.css";

const CityInfo = ({ city, country }) => {
  return (
    <>
        <Typography variant="h6">
            {city}
        </Typography>
        <Typography variant="h5">
            {country}
        </Typography>
    </>
  )
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
