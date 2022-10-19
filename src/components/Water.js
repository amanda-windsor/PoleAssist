import React from "react";
import { View, Animated, Platform } from "react-native";
import {
  Svg,
  Defs,
  LinearGradient as SlinearGradient,
  Stop,
  Path,
  G,
  Circle,
  RadialGradient,
} from "react-native-svg";
const AnimatedG = Animated.createAnimatedComponent(G);
/**
 * WaterProgress
 * @param width : water progress width | type : integer
 * @param height : water progress height | type : integer
 * @param percent : water progress percent | type : integer
 * @returns
 */
export default class WaterProgress extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    /* update progress when percent is changed */
    if (this.props.percent === nextProps.percent) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    /* chart data */
    let waterY = (this.props.percent * 61) / 100, // water Y position
      translateY = 31 - waterY, // water Y position - 0 position (31px)
      waterpercentanime = new Animated.Value(31); // water Y position animation
    /* chart animation */
    Animated.timing(waterpercentanime, {
      toValue: translateY,
      duration: 500,
      useNativeDriver: false,
    }).start();
    return (
      <View
        style={{
          width: this.props.width,
          height: this.props.height,
          borderRadius: Platform.OS == "ios" ? 28 : 59, //ios fix
          overflow: "hidden",
        }}
      >
        <Svg
          width={this.props.width}
          height={this.props.height}
          viewBox="0 0 58 58"
          fill="none"
        >
          <G transform="translate(-2 0) scale(1.1)">
            <AnimatedG
              style={{
                transform: [{ translateY: waterpercentanime }], // animate water to Y position
              }}
            >
              {/* water */}
              <Path
                d="M 28.571 27.5 C 43.071 18.5 56.571 27.5 56.571 27.5 L 57 85 L 1 85 L 1.071 27.5 C 1.071 27.5 14.071 36.5 28.571 27.5 Z"
                fill="#5652E5"
              />
              <Path
                d="M 29 27.5 C 14.5 18.5 1 27.5 1 27.5 L 1 85 L 57 85 L 56.5 27.5 C 56.5 27.5 43.5 36.5 29 27.5 Z"
                fill="url(#paint0_linear)"
              />
            </AnimatedG>
          </G>
          {/* water bg */}
          <Circle
            cx="29"
            cy="29"
            r="28"
            fill="url(#paint1_radial)"
            fillOpacity="0.2"
            stroke="url(#paint2_linear)"
            strokeEidth="2"
          />
          {/* gradients */}
          <Defs>
            <SlinearGradient
              id="paint0_linear"
              x1="28.7855"
              y1="23.5"
              x2="28.7855"
              y2="57"
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#7DA9F4" />
              <Stop offset="1" stopColor="#5652E5" />
            </SlinearGradient>
            <RadialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(29 29) rotate(90) scale(28)"
            >
              <Stop stopColor="white" />
              <Stop offset="1" stopColor="white" stopOpacity="0.15" />
            </RadialGradient>
            <SlinearGradient
              id="paint2_linear"
              x1="16"
              y1="-9.5"
              x2="40.5"
              y2="53.5"
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#8A8CB3" />
              <Stop offset="1" stopColor="#8A8CB3" stopOpacity="0" />
            </SlinearGradient>
          </Defs>
          {/* gradients */}
        </Svg>
      </View>
    );
  }
}
