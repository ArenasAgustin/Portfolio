import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setProyect } from '../../redux/actions/index'
import Modal from "../Modal/Modal";
import './Card.css';

export default function Card({ title, image, description, deploy, github, setShowModal, showModal }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setProyect({title, image, description, deploy, github}));
        setShowModal(prev => !prev);
    }

    return (
        <>
            <div onClick={handleClick} className='cardBackgroud'>
                <div>
                    <img src={image} alt={title} className='imgCard' />
                </div>

                <div class='cardTitle'>
                    <span>&lt; </span> {title} <span> &#47;&gt;</span>
                </div>
            </div>
        </>

    );
}