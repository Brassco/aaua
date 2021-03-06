import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

class LeftBarMenuItem extends Component {

    render() {
        const {title, image, onPress} = this.props;
        const {container, imageContainer, imageStyle, textContainer, textStyle} = styles;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={container}>
                <View style={imageContainer}>
                    <Image

                           source={image}
                    />
                </View>
                <View style={textContainer}>
                    <Text style={textStyle}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    container: {
        flex:1,
        flexDirection:'row',
        maxHeight: 40,
        marginBottom: 22
    },
    imageContainer: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 25,
        height: 20
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        marginRight: 13
    },
    textStyle: {
        fontFamily: 'Roboto-Regular',
        color:'#1b1b1b',
        fontSize: 14
    }
}

export {LeftBarMenuItem}