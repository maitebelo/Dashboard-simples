
import styles from './Dashboard.module.css';
import { FaWallet, FaPlaneDeparture, FaReceipt, FaInbox, FaEye, FaArchive, FaSwimmer, FaWineGlassAlt, FaUniversity, FaCreditCard, FaPhoneAlt, FaPlane, FaStar, FaFly, FaPeopleCarry } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

function Sidebar() {
  const [matches, setMatches] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setMatches(window.innerWidth)


  })

  return (

    <aside className="sidenav" style={{ gridArea: "sidenav", backgroundColor: "#394263" }}>

      <div className="sidenav__header" style={{ display: "flex", padding: "20px", alignItems: "center", paddingTop: "30px" }}>
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile" style={{ width: "32%", borderRadius: "50%", marginBottom: "3px", marginRight: "30px" }} />
        <span className="sidenav_subitem" style={{ color: "#ddd", fontSize: "1.2rem" }}>John</span>
      </div>
      <ul className="sidenav__list" style={{ padding: 0 }}>
        <li className="sidenav__list-item" style={{ padding: "4px 20px 4px 20px", color: "#ddd", fontSize: "1.2rem", marginBottom: "6px" }}>
          Documents
          <ul style={{ margin: "0", padding: "0" }}>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaWallet className={styles.styledSvg} /> Insurance</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaPlaneDeparture className={styles.styledSvg} />Travel</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaReceipt className={styles.styledSvg} />Taxers</li>
          </ul>
        </li>
        <li className="sidenav__list-item" style={{ padding: "4px 20px 4px 20px", color: "#ddd", fontSize: "1.2rem", marginBottom: "6px" }}>
          Messages
          <ul style={{ margin: "0", padding: "0" }}>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaInbox className={styles.styledSvg} />Inbox</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaEye className={styles.styledSvg} />Unread</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaArchive className={styles.styledSvg} />Archives</li>
          </ul>
        </li>
        <li className="sidenav__list-item" style={{ padding: "4px 20px 4px 20px", color: "#ddd", fontSize: "1.2rem", marginBottom: "6px" }}>
          Photo Album
          <ul style={{ margin: "0", padding: "0" }}>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaSwimmer className={styles.styledSvg} />Vacation</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaWineGlassAlt className={styles.styledSvg} />Anniversary</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaUniversity className={styles.styledSvg} />University</li>
          </ul>
        </li>
        <li className="sidenav__list-item" style={{ padding: "4px 20px 4px 20px", color: "#ddd", fontSize: "1.2rem", marginBottom: "6px" }}>
          Statistics
          <ul style={{ margin: "0", padding: "0" }}>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaCreditCard className={styles.styledSvg} />Finances</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaPhoneAlt className={styles.styledSvg} />Call Stats</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaPlane className={styles.styledSvg} />Trip Logs</li>
          </ul>
        </li>
        <li className="sidenav__list-item" style={{ padding: "4px 20px 4px 20px", color: "#ddd", fontSize: "1.2rem", marginBottom: "6px" }}>
          Events
          <ul style={{ margin: "0", padding: "0" }}>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaStar className={styles.styledSvg} />Weddings</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaFly className={styles.styledSvg} />Playdates</li>
            <li className="sidenav_subitem" style={{ padding: "10px 10px", color: "#ddd", fontSize: "0.98rem" }}> <FaPeopleCarry className={styles.styledSvg} />Networking</li>
          </ul>
        </li>
      </ul>
      <style>
        {`
          ul{
          list-style:none;
          }
          .sidenav_subitem:hover {
            background-color: rgba(255, 255, 255, 0.2);
            cursor: pointer;
          } 
          @media screen and (max-width: 600px){
          .sidenav{
            display: none;
          } 
          .main-overview{
            .padding-right: 50px;
          }
          .grid-container{
            display: flex;
            flex-direction: column;
          } 
          .footer{
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            }
          } 

        `}
      </style>

    </aside>
  );
}

export default Sidebar;
