# React Native On-screen Keyboard

<p align="center">
    <img src="https://img.shields.io/npm/v/@junctiontv/react-native-on-screen-keyboard.svg" />
    <img src="https://img.shields.io/npm/dt/@junctiontv/react-native-on-screen-keyboard.svg" />
    <img src="https://img.shields.io/github/issues/JunctionTV/react-native-on-screen-keyboard.svg" />
    <img src="https://img.shields.io/github/forks/JunctionTV/react-native-on-screen-keyboard.svg" />
    <img src="https://img.shields.io/github/stars/JunctionTV/react-native-on-screen-keyboard.svg" />
    <img src="https://img.shields.io/github/license/JunctionTV/react-native-on-screen-keyboard.svg" />
    <img src="https://img.shields.io/twitter/url/https/github.com/JunctionTV/react-native-on-screen-keyboard.svg?style=social" />        
</p>
<p>
A React Native component onscreen keyboard for React Native that displays an onscreen keyboard and puts the input into a `TextInput` component.
</p>
    
 <img src="https://i.imgur.com/DJN3iMD.png" />

## Installation

```npm i @junctiontv/react-native-on-screen-keyboard```

## Usage

```javascript
import Keyboard from "@junctiontv/react-native-on-screen-keyboard";
...

<Keyboard
  title={title}
  textInput={textInputRef}
  onInput={this.handleInput}
  inputType={inputType}
  keyboardContainerStyle={styles.keyboardContainer}
  keyboardTitleStyle={styles.keyboardTitle}
  keyboardButtonContainerStyle={styles.keyboardButtonContainer}
  keyboardButtonTextStyle={styles.keyboardButtonText}
  keyboardButtonTextPressStyle={styles.keyboardButtonTextPress}
  keyboardButtonStyle={styles.keyboardButton}
  keyboardButtonPressStyle={styles.keyboardButtonPress}
  keyboardButtonWidthMultiplier={{ "2": 2.05, "3": 3.1, "4": 4.15 }}
/>
```

Prop | Type | Optional | Description
------------ | ------------- | ---- | ----
**`title`** | _String_ | :heavy_check_mark: | sets the title of the keyboard
**`textInput`** | _React Ref_ | :x: | the reference of the `TextInput` which is to be attached
**`onInput`** | _Function_ | :x: | callback to set the value of the text from the keyboard
**`inputType`** | _String_ | :x: | sets the input type of the keyboard. Currently only `textEmailAddress`, `textPassword` and `textSearch` are supported
**`keyboardContainerStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard container
**`keyboardTitleStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard title
**`keyboardButtonContainerStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard buttons container
**`keyboardButtonTextStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard buttons text in unpressed state
**`keyboardButtonTextPressStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard buttons text in pressed state
**`keyboardButtonStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard buttons in unpressed state
**`keyboardButtonPressStyle`** | _Object_ | :heavy_check_mark: | style to set the style for the keyboard buttons in pressed state
**`keyboardButtonWidthMultiplier`** | _Object_ | :heavy_check_mark: | sets the amount of multiplier of the keys with the longer widths

## Contributing
All contributions including new features, requests, bug fixes are open to everyone. Feel free to open a PR!

### License

React Native On-screen Keyboard is [MIT licensed](./LICENSE).
