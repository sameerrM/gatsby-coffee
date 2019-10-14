import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import './bootstrap.min.css';
import "./layout.css"

import Navbar from '../components/Globals/Navbar'
import Footer from '../components/Globals/Footer'

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
