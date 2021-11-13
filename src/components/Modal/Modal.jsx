import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetProyect } from '../../redux/actions/index'
import './Modal.css';

export default function Modal({ showModal, setShowModal }) {
    const dispatch = useDispatch();

    const proyect = useSelector(state => state.proyect);
    const [proyects, setProyect] = useState(proyect);

    const closeModal = () => {
        setShowModal(false);
        dispatch(resetProyect());
    };

    useEffect(() => {
        setProyect(proyect);
    }, [proyect]);

    return (
        <>
            {
                showModal
                    ?
                    <div className='modalConteiner'>
                        <div>
                            <div className="modalWrapper">
                                <img src={proyects?.image} alt={proyects?.title} className='modalImg' />

                                <div className='modalContent'>
                                    <h1>{proyects?.title}</h1>
                                    <p>{proyects?.description?.txt}</p>
                                    <a href={proyects?.github} target='_blank'>Github</a>
                                    <a href={proyects?.deploy} target='_blank'>Deploy</a>
                                </div>

                                <button
                                    className='closeModalBtn'
                                    onClick={() => setShowModal(prev => !prev)}
                                />
                            </div>
                        </div>


                        <div onClick={closeModal} className='modalbackground'></div>
                    </div>

                    : null
            }
        </>
    );
}