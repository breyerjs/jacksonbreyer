import React from 'react';
import Header from '../Header/Header';
import styles from './InterestsPage.scss';

const InterestsPage = () => {
    return(
        <div>
            <Header subheader={"has lots of interests"} />
			Coming Soon!
			{/* <div className={styles.interestItem}>
				<div className={styles.interestName}>Martial Arts</div>
				I've practiced various martial arts for 17 years and have a black belt from the World Taekwondo Federation.
			</div>
			<div className={styles.interestItem}>
				<div className={styles.interestName}>Outdoors Stuff</div>
				I love to hike, climb, camp, canoe, and otherwise spend time outside. 
			</div> */}
        </div>
    );
};
export default InterestsPage;
