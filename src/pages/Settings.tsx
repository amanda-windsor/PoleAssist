import React from "react";
import {
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="pageTitle">
            <h1>Settings</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Please login to your account:</p>
        <form>
          <IonItem>
            <IonLabel position="stacked">Enter your email address</IonLabel>
            <IonInput
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              inputMode="email"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Enter your password</IonLabel>
            <IonInput type="password" placeholder="Password" />
          </IonItem>
        </form>
        <IonContent className="ion-padding" id="loginButton">
          <IonButton
            onClick={() => alert("You are logged in!")}
            type="submit"
            size="large"
          >
            Login
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
