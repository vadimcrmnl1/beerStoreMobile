import {Button, ScrollView, View} from "react-native";
import {useAppSelector} from "../app/hooks";
import {productStyles} from "../common/styles/styles";
import {Drinks} from "../features/drinks/Drinks";
import {selectDrinks} from "../features/drinks/model/drinks-selectors";

export const DrinksScreen = () => {
    const drinks = useAppSelector(selectDrinks)
    return (
        <View style={{backgroundColor: '#282424'}}>
            <View style={productStyles.linkBlock}>
                <Button color={'#8f0000'} title={'Віскі'}/>
                <Button color={'#8f0000'} title={'Ром'}/>
                <Button color={'#8f0000'} title={'Коньяк'}/>
                <Button color={'#8f0000'} title={'Бренди'}/>
                <Button color={'#8f0000'} title={'Ликері'}/>
                <Button color={'#8f0000'} title={'Водка'}/>
            </View>
            <ScrollView>
                <View>
                    <Drinks drinks={drinks}/>
                </View>
            </ScrollView>
        </View>

    )
}
