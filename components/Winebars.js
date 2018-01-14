import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWinebarsFromServer } from '../actions/winebars';
import { View, Image, ScrollView, Text, TouchableHighlight, StyleSheet } from 'react-native';


class Winebars extends Component {
  constructor(props) {
    super(props);
    this.states = {};
    this._function = this._function.bind(this);
  }

  componentWillMount() {
    this.props.fetchWinebarsFromServer();
  }

  _function() { }

  _renderWinebars() {
    const { winebars, navigation } = this.props;
    
    return winebars.map((winebar) => 
      <TouchableHighlight key={winebar.id}  onPress={() => navigation.navigate('WinebarDetail', {winebar_id: winebar.id})}>
          <View style={styles.winebarCard}>
              <Image style={styles.winebarThumbnail} source={{uri: `https://storage.googleapis.com/winebars/${winebar.id}/1.png`}} />
              <View style={styles.winebarName}>
                  <Text>{winebar.name}</Text>
              </View>
          </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <Image style={styles.carousel} source={{uri: 'https://storage.googleapis.com/tow_masthead_images/masthead-1.png'}} />
        
        <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
          <Text style={styles.wineBarsInfoTitle}>와인바 정보</Text>
        </View>
        
        <View style={styles.wineBarsInfoScrollView} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: 10}}>
            {this._renderWinebars()}
          </View>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  carousel: {
    height: 200,
    // backgroundColor: 'skyblue',
  },
  wineBarsInfoTitle: {
    justifyContent: 'center',
    marginBottom: 10,
  },
  wineBarsInfoScrollView: {
    position: 'relative',
  },
  winebarCard: {
    height: 200, 
    width: 160, 
    marginLeft: 20, 
    marginTop: 20,
    backgroundColor: '#FCFCFC',
    shadowOffset:{  width: 2, height: 1.5  },
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.5,
    shadowRadius: 1.1,
  },
  winebarThumbnail: {
    height: 140,
    width: 160,
    padding: 0
  },
  winebarName: {
    height: 60,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


const mapStateToProps = ({ winebars }) => ({ winebars });
export default connect(mapStateToProps, { fetchWinebarsFromServer }) (Winebars);
