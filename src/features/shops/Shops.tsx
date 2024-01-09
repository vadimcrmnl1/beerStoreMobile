import {onValue, ref} from 'firebase/database'
import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {db} from '../../app/firebase'
import {styles} from "../../common/styles/styles";
import {fetchShopsAC} from "./model/actions";
import {selectShops} from "./model/shop-selectors";
import {Shop} from "./Shop/Shop";

export const Shops: React.FC = () => {
    const dispatch = useDispatch()
    const shops = useSelector(selectShops)
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchShopsAC(data.shops))
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
