import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  ViewPropTypes
} from "react-native";
import PropTypes from "prop-types";

export default class KeyboardAvoidingView extends React.Component {
  static propTypes = {
    KeyboardAvoidingViewProps: RNKeyboardAvoidingView.propTypes,
    keyboardAvoidingViewStyle: ViewPropTypes.style,
    innerViewStyle: ViewPropTypes.style
  };

  static defaultProps = {
    KeyboardAvoidingViewProps: {},
    keyboardAvoidingViewStyle: {},
    innerViewStyle: {}
  };

  render() {
    const {
      children,
      innerViewStyle,
      KeyboardAvoidingViewProps,
      keyboardAvoidingViewStyle
    } = this.props;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          ...keyboardAvoidingViewStyle
        }}
        {...KeyboardAvoidingViewProps}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              justifyContent: "flex-end",
              ...innerViewStyle
            }}
          >
            {children}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
