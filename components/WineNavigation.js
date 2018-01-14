import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodayWinesFromServer, popOneCardFromTodayWines } from '../actions/todayWines';
import { View, Image, ScrollView, Text, TouchableHighlight, StyleSheet } from 'react-native';
import CardStack from 'react-native-card-stack';
import flattenStyle from 'flattenStyle';

class WineNavigation extends Component {
    constructor(props) {
        super(props);
        this._handleSwipeRight = this._handleSwipeRight.bind(this);
        this._handleSwipeLeft = this._handleSwipeLeft.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
    }

    componentWillMount() {
        this.props.fetchTodayWinesFromServer();
    }

    _handleSwipeLeft(idx) { }

    _handleSwipeRight(idx) { }

    _handleRemove(idx) {
        // TODO: 모든 카드 소진되었을 때 behavior
        this.props.popOneCardFromTodayWines();
    }


    _renderCard(w) {
        return (
            <View key={w.wine_id} style={styles.card}>
                <Text style={styles.cardTopText}>{w.wine_name.toUpperCase()}</Text>    
                
                <Image source={{uri: w.wine_imageUrl}} style={styles.cardImage}/>
                <View style={styles.cardText}>
                    <Text style={styles.cardTextOrigin}>origin: {w.origin}</Text>    
                    <Text style={styles.cardTextSecondary}>@{w.winebar_name} </Text>
                    
                    <Text style={styles.cardTextDescription}>{w.description}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <CardStack
                cardList={this.props.todayWines}
                renderCard={this._renderCard}
                cardHeight={flattenStyle(styles.card).height}
                cardWidth={flattenStyle(styles.card).width}
                cardRotation={20}
                cardOpacity={0.5}
                onSwipeRight={this._handleRemove}
                onSwipeLeft={this._handleRemove}
                onSwipeUp={this._handleRemove}
                onSwipeDown={this._handleRemove}
                leftSwipeThreshold={-150}
                rightSwipeThreshold={150}
                upSwipeThreshold={-150}
                downSwipeThreshold={150}
            />
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: 500,
        width: 350,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)', //borderColor: '#A9A9A9',
        borderRadius: 0, //borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        overflow: 'hidden',
      },
      cardTopText: {
        position: 'absolute',
        left: 0,
        top: 30,
        height: 200,
        width: 350,
        fontSize: 25,
        color: '#696969',
        textAlign: 'center',
        backgroundColor: 'transparent',
        paddingLeft: 10,
        paddingRight: 10
      },
      cardImage: {
        position: 'absolute',
        left: 85,
        top: 110,
        width: 180,
        height: 180,
        borderRadius: 90,
        borderColor: '#FFF',
        borderWidth: 4,
        backgroundColor: '#1E90FF'
      },
      cardText: {
        position: 'absolute',
        left: 0,
        top: 300,
        width: 350,
        alignItems: 'center',
        padding: 20
      },
      cardTextSecondary: {
        textAlign: 'center',
        fontSize: 18,
        color: 'grey',
        backgroundColor: 'transparent'
      },
      cardTextDescription: {
        textAlign: 'center',
        fontSize: 10,
        color: '#696969',
        backgroundColor: 'transparent',
        paddingTop: 10
      },
      cardTextOrigin: {
        textAlign: 'center',
        fontSize: 10,
        color: '#696969',
        backgroundColor: 'transparent',
        paddingBottom: 10
      }
})



const mapStateToProps = ({ todayWines }) => ({ todayWines });
export default connect(mapStateToProps, { 
    fetchTodayWinesFromServer, popOneCardFromTodayWines
 }) (WineNavigation);
