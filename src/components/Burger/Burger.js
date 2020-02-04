import React from 'react' ;
import BurgerIngredients from './BurgerIngredients/BurgerIngredients' ;
import classes from './Burger.css' ;

const burger = (props) => {
    const transform = Object.keys(props.ingredients)
                            .map(ig =>
                                 {return [...Array (props.ingredients[ig])].map ((_, i)=>
                                    { return <BurgerIngredients key= {ig + i} type= {ig}/> ;
                                 });
                            })
                            .reduce ((arr, el)=> {
                                 return arr.concat (el) ;
                            }, []) ;
    return (
        <div className= {classes.Burger}>
            <BurgerIngredients type= 'bread-top'/>
            {transform}
            <BurgerIngredients type= 'bread-bottom'/>
        </div>
    ) ;
} ;

export default burger ;
