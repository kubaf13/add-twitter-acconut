import React from 'react'
import style from './Modal.module.scss'
import Form from '../Form/Form'

const Modal = ({ closeModalFn }) => (
    <div className={style.wrapper}>
        <button className={style.closeButton} onClick={closeModalFn}></button>
        <Form />
    </div>
)

export default Modal