import React, {useState} from 'react';
import classes from './PizzaPage.module.scss'
import Sort from "../../Sort/Sort";
import Filter from "../../Filter/Filter";
import Pizzas from "../../Pizzas/Pizzas";
import testPizza from '../../../img/pizza/image 6.svg'

const PizzaPage = (props) => {
    const types = [
        {
            id: 1,
            title: 'All'
        }, {
            id: 2,
            title: 'Meat'
        },
        {
            id: 3,
            title: 'Grill'
        },
        {
            id: 4,
            title: 'Spicy'
        },
        {
            id: 5,
            title: 'Vegetarian'
        },
        {
            id: 6,
            title: 'Closed'
        }
    ]
    const pizzas = [
        {
            id: 1,
            imageURL: testPizza,
            name: 'Mozzarella',
            type: [1, 3, 6],
            size: [1, 2],
            dough:[1,2],
            price: 30,
            rating: 3
        },{
            id: 2,
            imageURL: testPizza,
            name: 'Pepperoni',
            type: [1, 2],
            size: [1, 2, 3],
            dough:[1],
            price: 45,
            rating: 1
        },{
            id: 3,
            imageURL: testPizza,
            name: 'Cheeseburger',
            type: [5],
            size: [2, 3],
            dough:[2],
            price: 20,
            rating: 5
        }
    ]

    const [type, setType] = useState(types[0])
    const [category, setCategory] = useState('');

    console.log('type', type)
    console.log('category', category)



    return (
        <div className={classes.PizzaPage}>

            <div className={classes['pizza-nav']}>

                <Filter
                    selectType={type}
                    setSelectType={setType}
                    types={types}
                />

                <Sort
                    category={category}
                    setCategory={setCategory}
                />
            </div>
            {
                type && <h1>{type.title}</h1>
            }

                <Pizzas pizzas={pizzas}/>

        </div>
    )
};

export default PizzaPage;