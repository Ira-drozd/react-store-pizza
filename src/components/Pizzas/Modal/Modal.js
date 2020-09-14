import React from 'react';
import classes from './Modal.module.scss'
import {motion} from "framer-motion";

const Modal = ({selectDescription, setSelectDescription}) => {
    const onClickHandler = (e) => {
        if (e.target.classList.contains(classes.Modal)) {
            setSelectDescription(null)
        }
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className={classes.Modal}
            onClick={onClickHandler}
        >
            <motion.div
                initial={{y: '100vh'}}
                animate={{y: 0}}
                className={classes.container}>
                <img src={selectDescription.img} alt="img"/>
                <div>
                    <span>Pizza {selectDescription.name}</span>
                    <p>Ingredients:</p>

                    <ul>
                        {
                            selectDescription.description.map((ingredient, index) =>
                                <li key={index}>{ingredient}</li>
                            )
                        }
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    )
};

export default Modal;