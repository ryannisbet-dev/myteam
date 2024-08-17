import { useState } from 'react';
import './directors-card.scss';

import Twitter from '../../assets/icon-twitter.svg';
import LinkedIn from '../../assets/icon-linkedin.svg';

const DirectorsCard = ({ avatar, name, title, quote }) => {
    const [isOpen, setIsOpen] = useState(true); 

    const handleClick = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div className={`directors__card ${isOpen ? 'open' : ''}`}>
            {isOpen ? (
                <>
                    <img className="directors__img" src={avatar} alt={name} />
                    <h1 className="directors__name">{name}</h1>
                    <p className="directors__title">{title}</p>
                    <button className="directors__btn material-symbols-outlined" onClick={handleClick}>Add</button>
                </>
            ) : (
                <>
                    <h1 className="directors__name">{name}</h1>
                    <p className="directors__quote">{quote}</p>
                    <div className="directors__socials">
                        <img src={Twitter} alt="twitter" className="directors__social" />
                        <img src={LinkedIn} alt="linkedin" className="directors__social" />
                    </div>
                    <button className="directors__btn material-symbols-outlined close" onClick={handleClick}>Close</button>
                </>
            )}
        </div>
    );
};

export default DirectorsCard;
