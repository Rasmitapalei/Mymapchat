import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Button } from 'react-native';

import jsonData from './jsonData/DocumentParts.json';
import Accordian from './Screen/Accordian';

class MyComponent extends Component {


    state = {
        carousel: [],
        items: [],
        expandedToc3Index: -1,
        hideToc1AndToc2: true,
        
    };


    componentDidMount() {
        this.setState({
            carousel: jsonData.carousel,
            items: jsonData.items
        });
    }
   
    toggleToc3Expand = (index) => {
        this.setState({
            expandedToc3Index: this.state.expandedToc3Index === index ? -1 : index
        });
    }

    renderCarouselItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image source={{ uri: item.image }} style={styles.carouselImage} />
            <Text style={styles.carouselText}>{item.text}</Text>
        </View>
    );

    render() {
        const { carousel, items, expandedToc3Index, hideToc1AndToc2,} = this.state;

        return (
            <View>
                {hideToc1AndToc2 ? null : (
                    <View>
                        <Text style={styles.toc1}>Table of Contents</Text>
                        <Text style={styles.toc2}>Chapter 1</Text>
                    </View>
                )}
                <View style={styles.carouselContainer}>
                    <FlatList
                        horizontal
                        data={carousel}
                        renderItem={this.renderCarouselItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                
                <View style={styles.container}>
                    <Text style={styles.headerText}> PRODUCTS:</Text>
                    <TouchableOpacity >
                    <Text style={{top: 45, marginLeft: 14, fontSize: 16}}>TouchableOpacity</Text>
                    </TouchableOpacity>
                    <View style={{ top: 23, right: 35, width: '130%', height: '70%' }}>
                  <View >
                  <TouchableOpacity onPress={() => this.toggleToc3Expand(0)} >
                    <View style={{ top: 48, left: 202 }}>
                        <Image
                            source={require('./assets/images/key.png')}
                            style={{ height: 13, width: 11 }}
                        />
                    </View>
                </TouchableOpacity>
                  </View>
                   
                <TouchableOpacity>
                <View style={{ top: 135, left: 132 }}>
                        <Image
                            source={require('./assets/images/key.png')}
                            style={{ height: 13, width: 11 }}
                        />
                    </View>
                </TouchableOpacity>
                        {items.map((item, index) => (
                            <View key={index}>
                                <Text style={styles.toc2}>{item.toc}</Text>
                                <Text style={styles.contentText}>{item.content}</Text>
                                
                                {item.child && (
                                    <View>
                                        {item.child.map((childItem, childIndex) => (
                                            <View key={childIndex}>
                                                <TouchableOpacity onPress={() => this.toggleToc3Expand(childIndex)}>
                                                    <Text style={styles.toc3}>{childItem.toc}</Text>
                                                </TouchableOpacity>
                                                {expandedToc3Index === childIndex && (
                                                    <View style={styles.toc3Content}>
                                                        <Text style={styles.contentText}>{childItem.content}</Text>
                                                        {childItem.child && (
                                                            <View style={styles.toc4Container}>
                                                                {childItem.child.map((level3ChildItem, level3ChildIndex) => (
                                                                    <View key={level3ChildIndex}>
                                                                        <Text style={styles.toc4Text}>{level3ChildItem.toc}</Text>
                                                                        <Text style={styles.contentText}>{level3ChildItem.content}</Text>
                            
                                                                    </View>
                                                                    
                                                                ))}
                                                            </View>
                                                        )}
                                                    </View>
                                                )}
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                   <View style={{top: 25, marginLeft: 17,}}>
                   <Accordian />
                   </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {
       height: 35,
        marginTop: '-16%'
    },
    carouselItem: {
        flex: 1,
        marginRight: 20,
        
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    carouselText: {
        position: 'absolute',
        bottom: 1,
        color: '#fff',
        fontSize: 18,
        padding: 8
    },
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 60,
        top: '-10%',
        marginLeft: 2,
        // fontWeight: 'bold',
        fontSize: 26,
        
    },
    toc3: {
        // fontWeight: 'bold',
         color: 'blue',
        marginLeft: 52,
        marginRight: 2,
        fontSize: 14,
        padding: 5

    },
    toc3Content: {
        marginLeft: 30
    },

    headerText: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: 'blue',
        width: 353,
        right: 0,
        top: 22
    },
    toc4Text: {
        fontWeight: 'bold',
        marginLeft: 20
    },
    contentText: {
        marginLeft: 50,


    },
    toc4Container: {
        color: 'green'
    }
});
export default MyComponent;

