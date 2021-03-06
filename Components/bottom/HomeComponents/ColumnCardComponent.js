import React, { Component } from 'react';
import Modal from "react-native-modal";
import Carousel from 'react-native-snap-carousel';
import { View, Image, Text, Dimensions, StyleSheet,ImageBackground} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, G, Grid } from 'native-base';
import { scrollInterpolator, animatedStyles } from '../../Util/HomeUtil/animation'
import styles from'../../css/bottom/HomComponents/ColumnCardComponent2CSS.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailPostModal from '../Bidding/DetailPostModal'
const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
// const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH/0.9*0.7 * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
} 
export default class ColumnCardComponent extends Component {
       
      constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)  
        this.state={
            mydata: this.props.data,
            isModalVisible:false
        }      
      }
      toggle(){
        this.setState({isModalVisible: !this.state.isModalVisible});
      }
      _renderItem({ item }) {

        return (
          <View style={styles.itemContainer}>
              <Modal isVisible={this.state.isModalVisible}>
                <DetailPostModal toggle2={() => this.toggle()} toData={item}/>
              </Modal>
            <TouchableOpacity onPress={()=>this.toggle()}>
            <ImageBackground
              style={{ width: "100%", height: "100%", alignItems: 'flex-start',justifyContent: 'flex-end'}}
              source={require("../../../assets/testhouse.png")}  //이미지경로
              resizeMode="cover" 
              >
            <View style={{margin:10}}>
            <Text style={styles.itemLabel}>{item.title}</Text>
            {
                item.content.replace(/\n/g,' ').slice(0, 15).length>=11 ?
                    <Text style={{color:"black"}}> 
                    {item.content.replace(/\n/g,' ').slice(0, 15) }...
                    </Text> 
                : <Text> 
                    {item.content.replace(/\n/g,' ').slice(0, 11) }
                 </Text>
                 
            }
            <Text></Text>
            <Text style={{fontSize:12}}>[{item.author}]</Text>
            <Text style={{color:'#FC510C'}}>월세 {item.price/10000}(만원)</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
          </View>
        );
      }
      
      render() {
        return (
          <View>
            <Carousel
              ref={(c) => this.carousel = c}
              data={this.state.mydata}
              renderItem={this._renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              onSnapToItem={(index) => this.setState({ index })}
              scrollInterpolator={scrollInterpolator}
              slideInterpolatedStyle={animatedStyles}
              useScrollView={true}          
            />
          </View>
        );
      }
  }
  