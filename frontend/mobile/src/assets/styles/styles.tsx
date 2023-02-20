import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // Authentification
    auth: {
        flex: 1,
        backgroundColor: colors.color1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header: {
        height: '35%',
    },
    authHomeText: {
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    authHomeBtn: {
        width: 180,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        color: colors.color1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
    },
    authcontainer: {
        width: '100%',
        height: '65%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    authtexthead: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.color1,
        borderBottomColor: colors.color1,
        borderBottomWidth: 5,
    },
    authtextbody: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginApi: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    loginApiBtn: {
        width: 80,
        height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        borderRadius: 50,
    },
    input: {
        width: '80%',
        height: 50,
        fontSize: 18,
        paddingHorizontal: 10,
        borderBottomColor: colors.black,
        borderBottomWidth: 8,
    },
    textForget: {
        color: '#000',
        fontSize: 16,
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.color1,
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    footerbtn: {
        textDecorationLine: 'underline',
    },
})

export default styles;