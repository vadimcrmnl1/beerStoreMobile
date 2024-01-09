import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#282424',
        display: "flex",
        flexDirection: 'column',
        // width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 36,
        color: '#ffe41b',
        fontFamily: 'Roboto-Light',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center'

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
        color: '#dc0909',
        textAlign: 'center',
        marginTop: 20,
        textShadowRadius: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textShadowColor: 'black',
        // transform: 'rotate(-10deg)',
    },
    bcgImage: {
        height: 100,
        borderRadius: 10,

    }
})
export const productStyles = StyleSheet.create({
    wrapper: {
        width: 400,
        maxWidth: '90%',
        minWidth: '90%',
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
    imageBlock: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    button: {
        width: '100%',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    descBlock: {
        opacity: 0.6
    }
})

export const cartStyles = StyleSheet.create({
    windowWrapper: {
        height: '25%',
        width: '100%',
        backgroundColor: '#e58038',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
    },
    windowContainer: {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    emptyCartWrapper: {
        width: '100%',
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    emptyCartText: {
        color: '#da9337',
        fontSize: 24,
        textAlign: 'center',
        shadowColor: '#fff',
        textShadowRadius: 4,
    },
    emptyCartImage: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    emptyCartButton: {
        width: '100%',
        height: 60,
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginBottom: 0,
        marginTop: 0
    },
    wrapper: {
        width: '100%',
        minHeight: 100,
        // backgroundColor: 'black',
        // margin: 5
    },
    container: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    imageContainer: {
        width: '20%',
        height: '90%',
    },
    productContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    textBlock: {
        display: 'flex',
        flexDirection: 'column',

    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300',
        textAlign: 'auto'
    },
    btnBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    btn: {
        width: '45%',
        height: 40,
        backgroundColor: '#f3b830',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },

    windowTitle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400'
    },
    windowTextBlock: {},
    windowText: {},
    input: {
        width: '100%',
        height: 40,
        // backgroundColor: '#282424',
        color: '#fff',
        fontSize: 24,
        fontWeight: '300',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#e58038',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5

    },
    inputText: {
        textAlign: 'center',
        color: '#e58038',
        fontSize: 24,
        fontWeight: '300'
    }

})
export const ftrSt = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '13%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#332d2d',
        // position: 'absolute',
        // marginTop: '100%'

    },
    container: {
        margin: 10,
        height: '90%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 15
    },
    menuText: {
        color: '#d5d5d5',
        fontSize: 16,
        fontWeight: '200',
        textAlign: 'center',

    },
    cartBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        width: 60,
        height: 60
    },
    cartText: {
        color: '#ff2c2c',
        borderRadius: 50,
        fontSize: 20,
        fontWeight: '600',
        width: 30,
        height: 30,
        borderColor: '#ff2c2c',
        borderStyle: 'solid',
        borderWidth: 3,
        textAlign: 'center',
        position: 'absolute',
        backgroundColor: '#fff',
        marginLeft: 45
    }
})
