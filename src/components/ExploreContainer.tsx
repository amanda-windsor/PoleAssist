import "./ExploreContainer.css";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonContent,
} from "@ionic/react";
import {
  calendarOutline,
  clipboardOutline,
  stopwatchOutline,
  trophyOutline,
} from "ionicons/icons";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent fullscreen>
      <div className="container">
        <IonCard className="Skills" href="/skills">
          <IonCardContent>
            <IonCardTitle>Skills</IonCardTitle>
            <IonIcon icon={trophyOutline}></IonIcon>
          </IonCardContent>
        </IonCard>

        <IonCard className="Routines" href="/routines">
          <IonCardContent>
            <IonCardTitle>Routines</IonCardTitle>
            <IonIcon icon={clipboardOutline}></IonIcon>
          </IonCardContent>
        </IonCard>

        <IonCard className="Training Plan" href="/trainingPlan">
          <IonCardContent>
            <IonCardTitle>Training Plan</IonCardTitle>
            <IonIcon icon={calendarOutline}></IonIcon>
          </IonCardContent>
        </IonCard>

        <IonCard className="Workout" href="/workout">
          <IonCardContent>
            <IonCardTitle>Workout</IonCardTitle>
            <IonIcon icon={stopwatchOutline}></IonIcon>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  );
};

export default ExploreContainer;
