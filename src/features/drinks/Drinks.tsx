import {Text, View} from "react-native";
import {Product} from "../../common/components/Product/Product";
import {styles} from "../../common/styles/styles";
import {ProductType} from "./model/drinks-reducer";

type DrinksPropsType = {
    drinks: ProductType[]
}

export const Drinks = (props: DrinksPropsType) => {
    const drinks = props.drinks

    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.title}>Виски</Text>
                {drinks.length ? drinks.filter(el => el.category === 'whiskey').map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price}
                                    totalPrice={el.totalPrice} amount={el.amount} totalAmount={el.totalAmount}
                                    image={el.image} type={el.type} brand={el.brand} manufacturer={el.manufacturer}
                                    category={el.category} alcohol={el.alcohol} ordered={el.ordered}/>
                }) : null}
                <Text style={styles.title}>Ром</Text>
                {drinks.length ? drinks.filter(el => el.category === 'rum').map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price}
                                    totalPrice={el.totalPrice} amount={el.amount} totalAmount={el.totalAmount}
                                    image={el.image} type={el.type} brand={el.brand} manufacturer={el.manufacturer}
                                    category={el.category} alcohol={el.alcohol} ordered={el.ordered}/>
                }) : null}
                <Text style={styles.title}>Бренди</Text>
                {drinks.length ? drinks.filter(el => el.category === 'brandy').map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price}
                                    totalPrice={el.totalPrice} amount={el.amount} totalAmount={el.totalAmount}
                                    image={el.image} type={el.type} brand={el.brand} manufacturer={el.manufacturer}
                                    category={el.category} alcohol={el.alcohol} ordered={el.ordered}/>
                }) : null}
                <Text style={styles.title}>Коньяк</Text>
                {drinks.length ? drinks.filter(el => el.category === 'cognac').map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price}
                                    totalPrice={el.totalPrice} amount={el.amount} totalAmount={el.totalAmount}
                                    image={el.image} type={el.type} brand={el.brand} manufacturer={el.manufacturer}
                                    category={el.category} alcohol={el.alcohol} ordered={el.ordered}/>
                }) : null}
                <Text style={styles.title}>Ликер</Text>
                {drinks.length ? drinks.filter(el => el.category === 'liquor').map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price}
                                    totalPrice={el.totalPrice} amount={el.amount} totalAmount={el.totalAmount}
                                    image={el.image} type={el.type} brand={el.brand} manufacturer={el.manufacturer}
                                    category={el.category} alcohol={el.alcohol} ordered={el.ordered}/>
                }) : null}
                <Text id={'Vodka'} style={styles.title}>Водка</Text>
                {drinks.length ? drinks.filter(el => el.category === 'vodka').map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price}
                                    totalPrice={el.totalPrice} amount={el.amount} totalAmount={el.totalAmount}
                                    image={el.image} type={el.type} brand={el.brand} manufacturer={el.manufacturer}
                                    category={el.category} alcohol={el.alcohol} ordered={el.ordered}/>
                }) : null}
            </View>
        </View>
    )
}
