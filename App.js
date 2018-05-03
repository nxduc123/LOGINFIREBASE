import React from 'react';
import { Font, AppLoading } from "expo";
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
 import * as firebase from 'firebase';
import {Col, Grid, Container, Content, Header, Form, Input, Button, Label, Item, Icon, InputGroup, Body,Title,Root, Left, Right  } from 'native-base';
const firebaseConfig = {
  apiKey: "AIzaSyB_3qpbJc4hMhHuuRhnRgfHEM4Pof9_2ZM",
  authDomain: "login-c8f44.firebaseapp.com",
  databaseURL: "https://login-c8f44.firebaseio.com",
  projectId: "login-c8f44",
  storageBucket: "login-c8f44.appspot.com",
  messagingSenderId: "539081418127"
}
firebase.initializeApp(firebaseConfig);







export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      
      <Container>
        <Header>
        <Left/>
        <Body style={{alignContent:'center',flex:1, marginTop:20,justifyContent:'center'}}>
          <Title>DUCNX APP</Title>
        </Body>
        <Right>
         
        </Right>
        </Header>
      <Content contentContainerStyle={{flex: 1}} style={{padding: 50}}>
      <Grid style={{alignItems: 'flex-start'}}>
      <Col>
        <Form >
            <Item floatingLabel>
              <Icon active name="md-mail" />
              <Label>Email</Label>
              <Input
                borderType="rounded"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel>
              <Icon active name="md-lock" />
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
              <Button 
                style={{marginTop:10}}
                success
                
                full 
                
                >
                <Icon name="md-log-in" />
                <Text>Đăng Nhập</Text>
              </Button>
              <Button
                style={{marginTop:10}}
                full
                primary
                
              >
                <Icon name="md-person-add" />
                <Text style={{alignItems:'flex-start'}}>Đăng Kí </Text>
              </Button>
            
          </Form>
        </Col>
        </Grid>
      </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  mb15: {
    marginBottom: 50
  },
})