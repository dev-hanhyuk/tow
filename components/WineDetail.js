import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWineDetailFromServer } from '../actions/wineDetail';
import { Image, View, Button, ScrollView, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Radar } from 'react-native-pathjs-charts';

class WineDetail extends Component {
  constructor(props) {
    super(props);
    this._function = this._function.bind(this);
  }

  componentWillMount() {
    const wine_id = this.props.navigation.state.params.wine_id;
    this.props.fetchWineDetailFromServer(wine_id);
  }

  _function() { }


  _renderRadarChart() {
    const { wineDetail, navigation } = this.props;  
    console.log(wineDetail);
    let data = [{
        "산도": wineDetail.acidity * 20 || 80,
        "바디감": wineDetail.body * 20 || 80,
        "신맛": wineDetail.acidity * 20 || 80,
        "드라이": wineDetail.dry * 20 || 80,
        "알코올": 90,
        }];

    let options = {
        width: 300,
        height: 300,
        margin: {
            
        },
        r: 120,
        max: 150,//최대값
        fill: "#cd3554",
        stroke: "rgba(134, 30, 50, 0.3)",
        animate: {
            type: 'oneByOne',
            duration: 300
        },
        label: {
            fontFamily: 'robato',
            fontSize: 20,
            fontWeight: true,
            fill: '#4b1b23',
            onLabelPress: this.onLabelPress
        }
    }
    
    return (
        <Radar data={data} options={options} />
    )
  }

  render() {
    const { wineDetail, navigation } = this.props;
    
    return (
        <ScrollView style={{backgroundColor: 'white'}} showsVerticalScrollIndicator={false} >
            <Image style={styles.mainWineImage} source={{uri: `https://storage.googleapis.com/tow_wines/img/${wineDetail.id}.jpg` }} />

            <View style={styles.wineDetailContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 20, padding: 20}}>{wineDetail.name}</Text>
                
            </View>

            <View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                {this._renderRadarChart()}
                <Text>{wineDetail.description}</Text>
            </View>

            <View style={styles.wineCheckinContainer}>
                <Button
                    title="와인체크인"
                    color="blue"
                    onPress={() => navigation.navigate('CheersPage')}
                />
            </View>
        </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
    mainWineImage: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wineDetailContainer: {
        alignItems: 'center',
    },
    wineStats: {
        height: 250,
        width: 250,
        backgroundColor: 'purple',
    },
    wineCheckinContainer: {
        marginTop: 30,
        marginBottom: 30
    }
})


const mapStateToProps = ({ wineDetail, wineSelection }) => ({ wineDetail, wineSelection });
export default connect(mapStateToProps, { fetchWineDetailFromServer }) (WineDetail);
