import React, {useContext} from "react";
import PropTypes from "prop-types";
import {AlertContext} from "../context/alert/alertContext";

const Alert = () => { 
    const {alert, hideAlert} = useContext(AlertContext);

    if (!alert.visible) return null;
    return (
        <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
            <strong>Внимание! </strong>
            {alert.text}
            <button type="button" onClick={hideAlert} className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

Alert.propTypes = {
    alert: PropTypes.object
};

export default Alert;