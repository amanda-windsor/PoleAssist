import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonProgressBar,
  IonBadge,
} from "@ionic/react";
import {
  calendarOutline,
  clipboardOutline,
  stopwatchOutline,
  trophyOutline,
} from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage className="homePage">
      <IonHeader>
        <IonToolbar className="homeTopBar">
          <IonTitle className="pageTitle">
            <img
              className="logo"
              alt="Pole Assist Logo"
              src="/assets/PoleAssistLogo2.svg"
            ></img>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="dashboard">
          <IonRow>
            <IonCol>
              <div className="dashboardButton">
                <IonLabel>
                  <h4>Skills</h4>
                </IonLabel>
                <IonCard
                  button
                  color="primary"
                  className="dashboardButton"
                  href="/skills"
                >
                  <IonCardContent>
                    <IonCardTitle>
                      <div className="dashboardHeading">
                        <IonIcon
                          icon={trophyOutline}
                          id="dashboardIcon"
                          size="large"
                        ></IonIcon>

                        {/* <h3>Skills</h3> */}
                      </div>
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
            <IonCol>
              <div className="dashboardButton">
                <IonLabel>
                  <h4>Routines</h4>
                </IonLabel>
                <IonCard
                  button
                  color="primary"
                  className="Routines"
                  href="/routines"
                >
                  <IonCardContent>
                    <IonCardTitle className="dashboardHeading">
                      <IonIcon
                        icon={clipboardOutline}
                        id="dashboardIcon"
                        size="large"
                      ></IonIcon>

                      {/* <h3>Routines</h3> */}
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="dashboardButton">
                <IonLabel>
                  <h4>Training Plan</h4>
                </IonLabel>
                <IonCard
                  button
                  color="primary"
                  className="Training Plan"
                  href="/trainingPlan"
                >
                  <IonCardContent>
                    <IonCardTitle className="dashboardHeading">
                      <IonIcon
                        icon={calendarOutline}
                        id="dashboardIcon"
                        size="large"
                      ></IonIcon>
                      {/* <h3>Training Plan</h3> */}
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>

            <IonCol>
              <div className="dashboardButton">
                <IonLabel>
                  <h4>Workout</h4>
                </IonLabel>
                <IonCard
                  button
                  color="primary"
                  className="Workout"
                  href="/Workout"
                >
                  <IonCardContent>
                    <IonCardTitle className="dashboardHeading">
                      <IonIcon
                        icon={stopwatchOutline}
                        id="dashboardIcon"
                        size="large"
                      ></IonIcon>
                      {/* <h3>Workout</h3> */}
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
          </IonRow>

          <IonRow col-3 className="dashboardProgressBar">
            <IonCol>
              <IonProgressBar
                type="determinate"
                color="primary"
                value={0.5}
              ></IonProgressBar>
            </IonCol>
            <IonBadge id="currentLevel">1</IonBadge>
            <IonBadge id="nextLevel">2</IonBadge>
          </IonRow>

          <IonCol>
            <IonLabel></IonLabel>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
