import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Router from '../Router/index';

const Layout = ({ routes }) => (
    <>
        <Router routes={routes}>
            <Nav routes={routes} />
        </Router>
        <div>
            default footer
        </div>
    </>
);

Layout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Layout;
