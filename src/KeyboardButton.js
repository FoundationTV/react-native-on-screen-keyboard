// 'use strict';
import { Component } from "react";
import PropTypes from "prop-types";
import * as React from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";

class KeyboardButton extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isFocused: false };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onPress = this.onPress.bind(this);
    this.images = {
      backspace: require("./backspace.png"),
      shift: require("./shift.png"),
      spacebar: require("./spacebar.png")
    };
  }

  onBlur() {
    this.setState({ isFocused: false });
  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onPress() {
    requestAnimationFrame(() => {
      this.props.onPress();
    });
  }

  render() {
    const {
      keyboardButtonContainerStyle,
      keyboardButtonTextStyle,
      keyboardButtonTextPressStyle,
      keyboardButtonStyle,
      keyboardButtonPressStyle
    } = this.props;
    let newStyle = {};
    if (this.props.width === 2)
      newStyle = { width: styles.container.width * 2.05 };
    else if (this.props.width === 3)
      newStyle = { width: styles.container.width * 3.1 };
    else if (this.props.width === 4)
      newStyle = { width: styles.container.width * 4.15 };
    let tintColor;
    if (keyboardButtonTextPressStyle && keyboardButtonTextStyle)
      tintColor = this.state.isFocused
        ? keyboardButtonTextPressStyle.color
        : keyboardButtonTextStyle.color;
    else
      tintColor = this.state.isFocused
        ? styles.textPress.color
        : styles.text.color;
    return (
      <View style={[styles.container, keyboardButtonContainerStyle, newStyle]}>
        <TouchableHighlight
          style={[
            this.state.isFocused ? styles.buttonPress : styles.button,
            this.state.isFocused
              ? keyboardButtonPressStyle
              : keyboardButtonStyle,
            newStyle
          ]}
          onPress={this.onPress}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        >
          {this.props.image ? (
            <Image
              style={{ marginLeft: 13 }}
              resizeMode="center"
              tintColor={tintColor}
              source={this.images[this.props.image]}
            />
          ) : (
            <Text
              style={[
                this.state.isFocused ? styles.textPress : styles.text,
                this.state.isFocused
                  ? keyboardButtonTextPressStyle
                  : keyboardButtonTextStyle
              ]}
            >
              {this.props.isCaps === true && this.props.width === undefined
                ? this.props.text.toUpperCase()
                : this.props.text}
            </Text>
          )}
        </TouchableHighlight>
      </View>
    );
  }
}

KeyboardButton.propTypes = {
  text: PropTypes.string.isRequired,
  onTapped: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    margin: 1
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "black"
  },
  textPress: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  buttonPress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default KeyboardButton;
