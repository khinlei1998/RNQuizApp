import { StyleSheet, Text, View, Image } from 'react-native'
import React, { FC } from 'react'
interface profileHeaderProps {

}
const ProfileHeader: FC<profileHeaderProps> = ({ }) => {
    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.profileNameText}>Hello Yati,</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#31304D' }}>Let's Play a game !</Text>
            </View>

            <Image source={require('../images/defaultuser.png')} style={{ width: 60, height: 60 }} />
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row', justifyContent: 'space-between',margin:15
    },
    profileNameText: {
        fontSize: 20, color: '#31304D'
    }
})