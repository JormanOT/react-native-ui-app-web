import React from 'react';
import styles from '../styles/Global';

const button = ({ assetUrl, link }) => {
    return (
        <div className={`${styles.btnBlack}`} onClick={()=> window.open(link , "_blank")}>
            <img src={assetUrl} alt="expo_icon" className={`${styles.btnIcon}`}/>
            <div className='flex flex-col justify-start ml-4'>
                <p className={`${styles.btnText} font-normal text-xs`}>Ver en la</p>
                <p className={`${styles.btnText} font-bold text-sm`}>Expo store</p>
            </div>
        </div>
    )
}

export default button