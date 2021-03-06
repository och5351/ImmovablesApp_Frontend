import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardComponent extends Component {
    render() {
      const { data } = this.props; // 피드 항목 데이터
      const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
      return (
          <Card>
              <CardItem >
                  <Body style={{flex: 1.5, flexDirection: 'column',  alignItems:'flex-start'}}>
                    <Text style = {{ fontWeight:'900'}}>월세정보{data.author}</Text>
                    <Text note>{new Date(data.created).toDateString()}</Text>
                    {
                    (data.body.replace(/\n/g,' ').slice(0, 15)).length>=11 ?
                      <Text> 
                        {data.body.replace(/\n/g,' ').slice(0, 15) }...
                      </Text> 
                    : <Text> 
                        {data.body.replace(/\n/g,' ').slice(0, 11) }
                      </Text>
                    }
                  </Body>                  
                  
                  <Body style={{flex: 1}}>
                    {     
                      image && image.length ?
                      <Image 
                        source={{ uri: image[0] }} 
                        style={{ height:100, width:150 }} />
                    : null
                    }
                  </Body>
              </CardItem>
          </Card>
      );
    }
  }