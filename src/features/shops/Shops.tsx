import {onValue, ref} from 'firebase/database'
import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {db} from '../../app/firebase'
import {useAppDispatch} from "../../app/hooks";
import {styles} from "../../common/styles/styles";
import {fetchShops} from "./model/shop-reducer";
import {selectShops} from "./model/shop-selectors";
import {Shop} from "./Shop/Shop";

export const Shops: React.FC = () => {
    const dispatch = useAppDispatch()
    const shops = useSelector(selectShops)
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchShops(data.shops, data.shops))
        })
    }, [shops.length])
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Магазині</Text>
            <View>
                {shops.length ? shops.map(el => {
                    return <Shop key={el.id} id={el.id} city={el.city} address={el.address} phone={el.phone}
                                 image={el.image} timeOfWork={el.timeOfWork}/>
                }) : null}
            </View>
        </View>
    )
}
