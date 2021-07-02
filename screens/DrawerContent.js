import React from  'react';
import { View, StyleSheet } from 'react-native';
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                            source = {{uri: 'https://scontent.fdel11-1.fna.fbcdn.net/v/t1.18169-9/10955643_828584630559281_8526321271454304563_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ba80b0&_nc_ohc=EX8IoSHoNVsAX-4Av8e&_nc_ht=scontent.fdel11-1.fna&oh=07563f9b1c5f15f25e5be073821c7f33&oe=60C58C1D'
                            }} 
                            size={70}
                            />

                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>
                                    Rohan Pathak
                                </Title>
                                <Caption style={styles.caption}>@Luprycus</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>7</Paragraph>
                                <Caption style={[styles.caption,{marginLeft: 12}]}>Following</Caption>                                
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon  
                                    name = "home-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = "Home"
                            onPress = {() => {props.navigation.navigate('Artists')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon  
                                    name = "account-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = "Profile"
                            onPress = {() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon  
                                    name = "bookmark-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = "Bookmarks"
                            onPress = {() => {props.navigation.navigate('Bookmarks')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon  
                                    name = "cog-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = "Settings"
                            onPress = {() => {props.navigation.navigate('Settings')}}
                        />  
                        </Drawer.Section>                                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name = "exit-to-app"
                        color = {color}
                        size = {size}
                    />
                    )} 
                    label = "Sign Out"
                    onPress = {() => {}}
                    />

            </Drawer.Section>        
        </View>    
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});