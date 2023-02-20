import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // ////////////////////////////////////////////////////////////
    auth: {
        flex: 1,
        backgroundColor: colors.color1,
        flexDirection: 'column',
        alignItems: 'center',
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
    footerbtn: {
        textDecorationLine: 'underline',
    },
    // ////////////////////////////////////////////////////////////
    authHeader: {
        width: '140%',
        flex: 1,
        backgroundColor: colors.white,
        transform: [{ rotate: '-15deg' }],
        marginTop: -50,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10
    },
    textAuthHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.color1,
        transform: [{ rotate: '15deg' }]
    },
    // ////////////////////////////////////////////////////////////
    authForm: {
        width: '80%',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    authInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 10,
        borderBottomColor: colors.black,
        borderBottomWidth: 8
    },
    // ////////////////////////////////////////////////////////////
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
    Forget: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textForget: {
        fontSize: 18,
        color: colors.black,
        textDecorationLine: 'underline'
    },
    // ////////////////////////////////////////////////////////////
    btns: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnsBtn: {
        width: 100,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.color1,
        backgroundColor: colors.black,
        paddingVertical: 8,
        borderRadius: 8
    },
    btnsLink: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        textDecorationLine: 'underline'
    },
    // ////////////////////////////////////////////////////////////
    authFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    authFooterLine: {
        width: '45%',
        height: 3,
        backgroundColor: colors.black
    },
    authFootertext: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default styles;