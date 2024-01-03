import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#282424',
        display: "flex",
        flexDirection: 'column',
        // width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 36,
        color: '#ffe41b',
        fontFamily: 'Roboto-Light',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        alignItems: 'center'

    },
})
export const shopStyles = StyleSheet.create({
    container: {
        backgroundColor: '#131313',
        width: '90%',
        borderRadius: 5,
        margin: 10,
    },
    block: {
        margin: 10,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    image: {
        height: 200,
        width: '100%'
    },
    descriptionBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    mainText: {
        color: '#fff6f6',
        fontSize: 20,
        width: '100%',
        fontFamily: 'Roboto-Light',
    },
    secondText: {},
    textImage: {
        fontSize: 50,
        color: '#f62a2a',
        textAlign: 'center',
        marginTop: 20,
        textShadowRadius: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textShadowColor: 'black',
        // transform: 'rotate(10deg)',
    },
    bcgImage: {
        height: 100,
        borderRadius: 10,

    }
})
export const productStyles = StyleSheet.create({
    wrapper: {
        width: '90%',
        maxWidth: '90%',
        // height: '100%',
        backgroundColor: '#fff',
        margin: 5,
        // display: 'flex',

    },
    linkBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#282424',
        width: '100%',
        margin: 5,
    },
    container: {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center'

    },
    image: {
        height: 300,
        width: '50%'
    },
    titleBlock: {
        width: '100%',
        // height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20
    },
    mainText: {},
    secondText: {
        opacity: 0.5,
        textTransform: 'uppercase'
    },
    priceContainer: {},
    priceBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginBottom: 10
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonBlock: {},
    button: {},
    descBlock: {}
})
