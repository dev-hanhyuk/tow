import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWinebarDetailFromServer } from '../actions/winebarDetail';
import { fetchWineSelectionFromServer } from '../actions/wineSelection';
import { Image, View, Button, ScrollView, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class WinebarDetail extends Component {
  constructor(props) {
    super(props);
    this.states = {};
    this._function = this._function.bind(this);
  }

  componentWillMount() {
    const winebar_id = this.props.navigation.state.params.winebar_id;
    this.props.fetchWinebarDetailFromServer(winebar_id);
    this.props.fetchWineSelectionFromServer(winebar_id);
  }

  _renderWinebarReview() {
    //TODO  
    return (<View><View style={styles.reviewContainer}>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <View style={styles.avatarWrapper}>
        <View style={{backgroundColor: 'steelblue', height: 75, width: 75, borderRadius: 50}}></View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>몽블랑</Text>
        </View>
        <View style={styles.reviewRatingWrapper}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>4.3/5.0</Text>
        </View>
    </View>
    <View style={{marginTop: 15}}>
        <Text>분위기가 너무 좋은 청담 앨리스!</Text>
        <Text>추천해주신 와인도 제 스타일이었어요!</Text>
    </View>
    </View>

    <View style={styles.reviewContainer}>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <View style={styles.avatarWrapper}>
        <View style={{backgroundColor: 'steelblue', height: 75, width: 75, borderRadius: 50}}></View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>풀무원샘물</Text>
        </View>
        <View style={styles.reviewRatingWrapper}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>4.0/5.0</Text>
        </View>
    </View>
    <View style={{marginTop: 15}}>
        <Text>좋네요~~</Text>
    </View>
    </View></View>)
  }

  _renderWinebarMapNavigation() {
    return (
        <View style={{marginTop: 30, height: 200, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Map/Navigation</Text>
        </View>
    )
  }


  _renderTastingWines() {
    const { wineSelection } = this.props;
    return wineSelection.map((wine) => 
        <TouchableHighlight key={wine.id} onPress={() => navigation.navigate('WineDetail')}>
            <View style={styles.wineSelectionContainer}>
                <Image style={styles.wineSelectionImage} source={{uri: wine.imageUrl }} />
                <Text>{wine.wine_name}</Text>
            </View>
        </TouchableHighlight>
    )
  }

  _renderOperationInfo() {
        const hours = this.props.winebarDetail.hours;
        let hoursArr = [];
        if (hours) {
            for (var key in JSON.parse(hours)) {
                hoursArr.push(`${key} : ${JSON.parse(hours)[key]}`)
            }
        }

        return hoursArr.map((h, idx) => 
            <View key={idx}>
                <Text style={{marginTop: 5}}> | {h} </Text>  
            </View>
        )
        
  }

  _function() { }

  render() {
    const { winebarDetail, navigation } = this.props;
    return (
        <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <Image style={styles.mainImage} source={{uri: `https://storage.googleapis.com/winebars/${winebarDetail.id}/1.png` }} />

            <View style={styles.descriptionWrapper}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 5}}>{winebarDetail.name}</Text>
            <View style={{ flex: 1, marginTop: 15, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Ionicons
                    name={'ios-heart-outline'}
                    size={15}
                    style={styles.stats}
                />
                <Text style={styles.stats}>{winebarDetail.visits}</Text>
                <Ionicons
                name={'ios-wine-outline'}
                size={15}
                style={styles.stats}
                />
                <Text style={styles.stats}>{winebarDetail.likes}</Text>
            </View>
            <View style={{marginTop: 15}}>
                <Text style={{fontSize: 15}}>| {winebarDetail.address}</Text>
            </View>
            </View>

            {this._renderWinebarMapNavigation()}

            <View style={{marginTop: 30, height: 300, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{paddingBottom: 20}}>테이스팅 와인</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this._renderTastingWines()}
                </ScrollView>
            </View>

            <View style={styles.descriptionWrapper}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>영업정보</Text>
                <Text style={{marginTop: 5}}> | 영업시간 </Text>
                {this._renderOperationInfo()}    
                <Text style={{marginTop: 5}}> | 메뉴 정보 </Text>
            </View>
            
            
            {this._renderWinebarReview()}

            <View style={styles.reviewButtonContainer}>
            <Button
                title="리뷰쓰기"
                color="blue"
                onPress={() => navigation.navigate('WinebarReview')}
            />
            </View>

        </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
    mainImage: {
        height: 200,
        // backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
      },
      descriptionWrapper: {
        padding: 10,
      },
      stats: {
        marginRight: 10
      },
      reviewContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 10
      },
      avatarWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      reviewRatingWrapper: {
      },
      reviewButtonContainer: {
        marginTop: 30,
        marginBottom: 30
      },
      wineSelectionContainer: {
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center'
      },
      wineSelectionImage: {
        width: 150, 
        height: 180, 
        marginLeft: 20
      }
})


const mapStateToProps = ({ winebarDetail, wineSelection }) => ({ winebarDetail, wineSelection });
export default connect(mapStateToProps, { fetchWinebarDetailFromServer, fetchWineSelectionFromServer }) (WinebarDetail);
