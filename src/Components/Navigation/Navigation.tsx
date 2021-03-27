import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = ({ Menu, Status }: any) => {
    console.log(Menu, Status);
    return <div className="app-nav"></div>;
};

Navigation.propTypes = {
    Menu: PropTypes.array.isRequired,
    Status: PropTypes.string.isRequired,
};

export default Navigation;
