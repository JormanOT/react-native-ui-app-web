import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';

function Feature() {
    return (
        <div className={`${styles.bgPrimary} ${styles.section} banner03`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1>Technologies</h1>
                    <p>ProfNef have been developed using a cross-platform technology, React Native.  </p>
                </div>
            </div>
        </div>
    )
}

export default Feature