import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { stopwatchOutline } from "ionicons/icons";
import "./Home.css";

const Workout: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="pageTitle">
          <h1>Workout</h1>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div>Workout Timer under construction!</div>
    </IonContent>
  </IonPage>
);

export default Workout;
