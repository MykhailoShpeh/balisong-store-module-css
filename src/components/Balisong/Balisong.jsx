import css from './Balisong.module.css';

//! Ім'я ножа
import { FiTag } from "react-icons/fi";
//! Марка
import { FaTrademark } from "react-icons/fa";
//! Ціна
import { BsCurrencyDollar } from "react-icons/bs";
//! Тип ножа 
import { GiButterflyKnife } from "react-icons/gi";
//! Матеріали
import { FiLayers } from "react-icons/fi";
//! Вага
import { FaWeightHanging } from "react-icons/fa";
//! Аксесуари
import { FiTool } from "react-icons/fi";

import { iconSize } from '@/constants/iconSize.js'

// import { Card } from './Balisong.styled.jsx'

export function Balisong({
    nameOfKnife,
    brand,
    price,
    typeOfKnife,
    image,
    materials,
    link,
    weight,
    accessories }) {
    return<>
        <h2><FiTag /> Ім'я: {nameOfKnife}</h2>
        <p><FaTrademark size={iconSize.sm} /> Бренд: {brand}</p>
        <p><BsCurrencyDollar size={iconSize.sm} /> Ціна: {price}</p>
        <p><GiButterflyKnife size={iconSize.sm} /> Тип: {typeOfKnife}</p>
        <img src={image} alt={nameOfKnife} />
        <p><FiLayers size={iconSize.sm} />Матеріали: {materials}</p>
        <a target='_blank' rel="noopener noreferrer" href={link}>Посилання на ніж</a>
        <p><FaWeightHanging size={iconSize.sm} />Вага: {weight}</p>
        <p><FiTool size={iconSize.sm} /> Аксесуари: {accessories}</p>
    </>
}