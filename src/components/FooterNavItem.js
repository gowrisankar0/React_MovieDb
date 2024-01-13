import React from 'react';
import "./foooterNavitem.css"

const FooterNavItem = ({name}) => {
  return (
    <li>
        <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
        <a href='#'>{name}</a>

    </li>
  )
}

export default FooterNavItem