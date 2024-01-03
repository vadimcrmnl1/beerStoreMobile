import React from "react";
import {Image, Text, View} from "react-native";
import {shopStyles} from "../../../common/styles/styles";
import {ShopType} from "../model/shop-reducer";
import emptyImage from './../../../common/images/empty_image.png'
import locIcon from './../../../common/images/icons/location.png'
import timeIcon from './../../../common/images/icons/time.png'
import phoneIcon from './../../../common/images/icons/phone.png'

export const Shop: React.FC<ShopType> = ({city, address, image, phone, timeOfWork}) => {
    return (
        <View style={shopStyles.container}>
            <View style={shopStyles.block}>
                <Image style={shopStyles.image} source={image ? {uri: image} : emptyImage}/>
                <View style={shopStyles.descriptionBlock}>
                    <Image source={locIcon} style={{width: 20, height: 20, marginRight: 5}}/>
                    <Text style={shopStyles.mainText}>{city}, {address}</Text>
                </View>
                <View style={shopStyles.descriptionBlock}>
                    <Image source={timeIcon} style={{width: 20, height: 20, marginRight: 5}}/>
                    <Text style={shopStyles.mainText}>{timeOfWork}</Text>
                </View>
                <View style={shopStyles.descriptionBlock}>
                    <Image source={phoneIcon} style={{width: 20, height: 20, marginRight: 5}}/>
                    <Text dataDetectorType={'phoneNumber'} style={shopStyles.mainText}>{phone}</Text>
                </View>
            </View>
        </View>
    )
}
