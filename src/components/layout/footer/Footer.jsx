import React from "react";
import classes from "./Footer.module.scss";


import ConsultingAgency from "./consultingAgency/ConsultingAgency";
import FooterContent from "./footerContent/FooterContent";
import LinksFooter from "./linksFooter/LinksFooter";


export default function Footer() {
    return (
        <footer className={classes.footer}>
            <ConsultingAgency/>
            <FooterContent/>
            <LinksFooter/>
        </footer>
    )
}