import {Text, View} from "react-native";
import {useAppSelector} from "../../app/hooks";
import {Product} from "../../common/components/Product/Product";
import {styles} from "../../common/styles/styles";
import {selectSnacks} from "./model/selectors";

export const Snacks = ({navigation}) => {
    const snacks = useAppSelector(selectSnacks)
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Грінки</Text>
                {snacks.toast.length ? snacks.toast.map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price} totalPrice={el.totalPrice}
                                    amount={el.amount} totalAmount={el.totalAmount} image={el.image} type={el.type}
                                    category={el.category} ordered={el.ordered} manufacturer={el.manufacturer}
                                    brand={el.brand} navigation={navigation}/>
                }) : null
                }
                <Text style={styles.title}>Морепродукті</Text>
                {snacks.seafood.length ? snacks.seafood.map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price} totalPrice={el.totalPrice}
                                    amount={el.amount} totalAmount={el.totalAmount} image={el.image} type={el.type}
                                    category={el.category} ordered={el.ordered} manufacturer={el.manufacturer}
                                    brand={el.brand} navigation={navigation}/>
                }) : null
                }
                <Text style={styles.title}>Чипсі</Text>
                {snacks.chips.length ? snacks.chips.map(el => {
                    return <Product key={el.id} id={el.id} title={el.title} description={el.description}
                                    price={el.price} totalPrice={el.totalPrice}
                                    amount={el.amount} totalAmount={el.totalAmount} image={el.image} type={el.type}
                                    category={el.category} ordered={el.ordered} manufacturer={el.manufacturer}
                                    brand={el.brand} navigation={navigation}/>
                }) : null
                }
            </View>
        </View>
    )
}
