import css from './Balisong.module.css';

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
    return <div className={css.card}>
        <h2>Ім'я: {nameOfKnife}</h2>
        <p>Бренд: {brand}</p>
        <p>Ціна: {price}</p>
        <p>Тип: {typeOfKnife}</p>
        <img src={image} alt={nameOfKnife} />
        <p>Матеріали: {materials}</p>
        <a href={link}>Посилання на ніж</a>
        <p>Вага: {weight}</p>
        <p>Аксесуари: {accessories}</p>
    </div>;

}