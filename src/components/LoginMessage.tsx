import { IonButton } from "@ionic/react";
import React from "react";

class Detail extends React.Component {
  buttonClicked() {
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <p>Hello! You are logged in as</p>
      </div>
    );
  }
}
export default Detail;
