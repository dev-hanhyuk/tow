import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWinebarsFromServer } from '../actions/winebars';
import { View, ScrollView, Text, TouchableHighlight, StyleSheet } from 'react-native';


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
      <TouchableHighlight key={winebar.id}  onPress={() => navigation.navigate('Winebars')}>
          <View style={styles.winebarCard}>
              <Text>{winebar.name}</Text>
          </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.carousel}>
          <Text>Carousel</Text>
        </View>

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
    backgroundColor: 'skyblue',
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
    backgroundColor: 'white'
  
  }
})


const mapStateToProps = ({ winebars }) => ({ winebars });
export default connect(mapStateToProps, { fetchWinebarsFromServer }) (Winebars);
