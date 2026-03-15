import PropTypes from 'prop-types';

import { Balisong } from '@/components/Balisong/Balisong.jsx';

import css from './BalisongList.module.css';

export function BalisongList({ items }) {
    return (
        <ul className={css.list}>
            {items.map
                (item =>
                    <li className={css.card} key={item.id}>
                        <Balisong
                            nameOfKnife={item.nameOfKnife}
                            brand={item.brand}
                            price={item.price}
                            typeOfKnife={item.typeOfKnife}
                            image={item.image}
                            materials={item.materials}
                            link={item.link}
                            weight={item.weight}
                            accessories={item.accessories}
                        />
                    </li>
                )}
        </ul>
    )
};

BalisongList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};