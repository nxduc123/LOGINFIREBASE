import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
 import * as firebase from 'firebase';
import {Col, Grid, Container, Content, Header, Form, Input, Button, Label, Item, Icon, InputGroup } from 'native-base';
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
  render() {
    return (
      <Container>
      <Header />
      <Content contentContainerStyle={{flex: 1}} style={{padding: 50}} theme={light}>
      <Grid style={{alignItems: 'center'}}>
      <Col>
        <Form >
            <Item floatingLabel>
              <Icon active name="md-mail" />
              <Label>Email</Label>
              <InputGroup
                placeholder="placeholder" 
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
                style={{marginTop:20}}
                success
              // rounded
                full 
                large
                >
                <Icon name="md-log-in" />
                <Text>Đăng Nhập</Text>
              </Button>
              <Button
                style={{marginTop:10}}
                full
                primary
                large
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