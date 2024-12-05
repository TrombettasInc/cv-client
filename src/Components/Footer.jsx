import React from 'react'
import styles from './Footer.module.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerlinks}>
            <a href="https://github.com/TrombettasInc">
            <FaGithub />
            </a> 
            <a href="https://www.linkedin.com/in/roberta-trombetta/">
            <CiLinkedin />
            </a>

        </div>

    </div>
  )
}

export default Footer