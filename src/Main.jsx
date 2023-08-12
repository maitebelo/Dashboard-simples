import React from 'react';
import styles from './Dashboard.module.css';
import OverviewCard from './OverviewCard';
import Card from './Card';
import styled from 'styled-components';
import { FaFileAlt, FaCalendarCheck, FaMailBulk, FaRegFileImage } from 'react-icons/fa';
import CardDoc from './CardDoc';
import CardChart from './CardChart';


const MainCards = styled.div`
  display:flex;
   margin: 20px;
  @media screen and (max-width: 767px){
  flex-wrap: wrap;  
 } 
`;

const DivCard = styled.div`
  width: 50%;
  @media screen and (max-width: 767px){
  width: 100%; 
 } 
`;

const DivPrimeiro = styled.div`
  flex-grow:1;
  height: 100%;
`;

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles['main-header']} >
        <div className={styles['main-header__heading']}>Olá, usuário</div>
        <div className={styles['main-header__updates']}>Como está?</div>
      </div>
      <div className={styles['main-overview']}>
        <div className={styles.overviewcard}><div className={styles.svnstyle1}><FaFileAlt /></div><OverviewCard title="New Document" subtitle="Europe Trip" /></div>
        <div className={styles.overviewcard}><div className={styles.svnstyle2}><FaCalendarCheck /></div><OverviewCard title="Upcoming Event" subtitle="Chilli Cookoff" /></div>
        <div className={styles.overviewcard}><div className={styles.svnstyle3}><FaMailBulk /></div><OverviewCard title="Recent Emails" subtitle="+10" /></div>
        <div className={styles.overviewcard}><div className={styles.svnstyle4}><FaRegFileImage /></div><OverviewCard title="New Album" subtitle="House Concert" /></div>
      </div>
      <MainCards>
        <DivPrimeiro>
          <Card />
        </DivPrimeiro>
        <DivCard>
          <CardDoc />
          <CardChart />
        </DivCard>
      </MainCards>
    </main>
  );
}

export default Main;


