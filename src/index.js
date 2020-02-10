// 'use strict';
import { Component } from "react";
import PropTypes from "prop-types";
import * as React from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import KeyboardButton from "./KeyboardButton";
import keyboardData from "./keyboardData";

class Keyboard extends Component<Props> {
  constructor(props) {
    super(props);
    this.allIndices = {
      emailNormalIndices: [0, 1, 2, 3, 4, 5],
      emailSpecialIndices: [0, 6, 7, 8, 4, 5],
      passswordNormalIndices: [0, 1, 2, 3, 9],
      passswordSpecialIndices: [6, 10, 11, 12, 9],
      passswordAccentIndices: [0, 13, 14, 15, 9],
      searchIndices: [16, 17, 18, 19, 20, 21, 22]
    };
    let initialIndices = {
      textEmailAddress: this.allIndices.emailNormalIndices,
      textPassword: this.allIndices.passswordNormalIndices,
      textSearch:this.allIndices.searchIndices,
    };
    this.state = {
      indices: initialIndices[props.inputType],
      isCaps: false,
      isSpecial: false,
      isAccent: false
    };
  }

  onPress(char) {
    const { inputType, onInput, textInput } = this.props;
    const { isCaps } = this.state;
    const {
      emailNormalIndices,
      emailSpecialIndices,
      passswordNormalIndices,
      passswordSpecialIndices,
      passswordAccentIndices,
      searchIndices,
    } = this.allIndices;
    switch (char) {
      case "backspace":
        onInput(textInput.current.props.value.slice(0, -1));
        break;
      case "spacebar":
        onInput(textInput.current.props.value + ' ');
        break;
      case "shift":
        this.setState({ isCaps: !isCaps });
        break;
      case "!#$":
        this.setState({
          isSpecial: true,
          isAccent: false,
          indices:
            inputType === "textPassword"
              ? passswordSpecialIndices
              : emailSpecialIndices
        });
        break;
      case "abc":
        this.setState({
          isSpecial: false,
          isAccent: false,
          indices:
            inputType === "textPassword"
              ? passswordNormalIndices
              : emailNormalIndices
        });
        break;
      case "àáâ":
        this.setState({
          isSpecial: false,
          isAccent: true,
          indices: this.allIndices.passswordAccentIndices
        });
        break;
      default:
        const addition = isCaps ? char.toUpperCase() : char;
        onInput(textInput.current.props.value + addition);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { emailNormalIndices, passswordNormalIndices,searchIndices } = this.allIndices;
    if (this.props.inputType !== nextProps.inputType) {
      let index = '';
      if (nextProps.inputType === "textPassword") index = passswordNormalIndices;
      else if (nextProps.inputType === "textEmailAddress") index = emailNormalIndices;
      else if (nextProps.inputType === "textSearch") index = searchIndices;
      this.setState({ isSpecial: false, isAccent: false, indices: index });
    }
    return true;
  }

  render() {
    const {
      keyboardContainerStyle,
      keyboardTitleStyle,
      title,
      keyboardButtonContainerStyle,
      keyboardButtonTextStyle,
      keyboardButtonTextPressStyle,
      keyboardButtonStyle,
      keyboardButtonPressStyle,
      keyboardButtonWidthMultiplier,
    } = this.props;
    const { indices, isSpecial, isAccent, isCaps } = this.state;
    return (
      <View style={[styles.container, keyboardContainerStyle]}>
        <Text style={[styles.title, keyboardTitleStyle]}>{title}</Text>
        {indices.map(index => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
            key={index}
          >
            {keyboardData[index].map(char => {
              let text = char.text;
              if (!isSpecial && !isAccent && text === "abc") text = "!#$";
              if (isSpecial && !isAccent && text === "!#$") text = "abc";
              if (!isAccent && !isSpecial && text === "abc") text = "àáâ";
              if (isAccent && !isSpecial && text === "àáâ") text = "abc";
              return (
                <KeyboardButton
                  image={char.image}
                  width={char.width}
                  text={text}
                  isCaps={isCaps}
                  onPress={() => this.onPress(text)}
                  key={text}
                  keyboardButtonContainerStyle={keyboardButtonContainerStyle}
                  keyboardButtonTextStyle={keyboardButtonTextStyle}
                  keyboardButtonTextPressStyle={keyboardButtonTextPressStyle}
                  keyboardButtonStyle={keyboardButtonStyle}
                  keyboardButtonPressStyle={keyboardButtonPressStyle}
                  keyboardButtonWidthMultiplier = {keyboardButtonWidthMultiplier}
                />
              );
            })}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 5,
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "white",
    backgroundColor: "#69696980"
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    color: "#ffffff"
  }
});

export default Keyboard;
