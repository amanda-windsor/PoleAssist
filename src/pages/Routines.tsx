import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonReorder,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline, shareOutline } from "ionicons/icons";
import "./Home.css";
import ViewRoutine from "../components/RoutineViewer";

const Routines: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="buttonText" icon="buttonIcon" />
        </IonButtons>
        <IonTitle className="pageTitle">
          <h1>Routines</h1>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonReorder>
          <IonItem button type="button" onClick={() => ViewRoutine()}>
            <IonLabel>Heatwaves</IonLabel>
            <IonReorder slot="end" />
            <IonIcon icon={shareOutline} />
          </IonItem>
        </IonReorder>
        <IonReorder>
          <IonItem>
            <IonLabel>Rewrite the Stars</IonLabel>
            <IonReorder slot="end" />
            <IonIcon icon={shareOutline} />
          </IonItem>
        </IonReorder>

        <IonItem slot="second">
          <IonLabel>Get on the Beers</IonLabel>
          <IonReorder slot="end" />
          <IonIcon icon={shareOutline} />
        </IonItem>
        <IonItem slot="third">
          <IonLabel>We like to Party</IonLabel>
          <IonReorder slot="end" />
          <IonIcon icon={shareOutline} />
        </IonItem>
        <IonItem slot="fourth">
          <IonLabel>Thunder Rolls</IonLabel>
          <IonReorder slot="end" />
          <IonIcon icon={shareOutline} />
        </IonItem>
      </IonList>

      <IonCard
        color="primary"
        button
        href="./routineBuilder"
        id="routineBuilderButton"
      >
        <IonCardTitle>
          <h2>
            <IonIcon icon={addOutline} id="floatAddIcon" size="extra-large" />
          </h2>
        </IonCardTitle>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Routines;
