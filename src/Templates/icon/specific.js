export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Grid,
  Col,
  Row,
  Text
} from "native-base";

class Specific extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.replaceAt("icon")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Platform</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Grid>
            <Row>
              <Col style={styles.col}>
                <Icon ios="ios-person" android="md-person" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-apps-outline" android="md-apps" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-menu" android="md-menu" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-paper" android="md-paper" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-cart-outline" android="md-cart" />
                <Text>person</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#FFF"
  },
  col: {
    alignItems: "center",
    paddingHorizontal: 3
  },
});

export default Specific;`;