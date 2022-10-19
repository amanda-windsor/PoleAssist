import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import WaterProgress from "../components/Water";
import "./Home.css";
import "./trainingPlan.css";

const trainingPlan: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="pageTitle">
          <h1>Training Plan</h1>
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-justify-content-center">
      <IonAccordionGroup
        multiple
        animated
        expand="inset"
        id="trainingPlanGroup"
      >
        <IonAccordion value="first">
          <IonItem slot="header">
            <IonLabel>Monday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header">
            <IonLabel>Tuesday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header">
            <IonLabel>Wednesday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
        <IonAccordion value="fourth">
          <IonItem slot="header">
            <IonLabel>Thursday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
        <IonAccordion value="fifth">
          <IonItem slot="header">
            <IonLabel>Friday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
        <IonAccordion value="sixth">
          <IonItem slot="header">
            <IonLabel>Saturday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
        <IonAccordion value="seventh">
          <IonItem slot="header">
            <IonLabel>Sunday</IonLabel>
          </IonItem>
          <div slot="content">
            <IonItem>
              <IonLabel>
                <IonInput placeholder="Add an activity!" />
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
);

export default trainingPlan;
