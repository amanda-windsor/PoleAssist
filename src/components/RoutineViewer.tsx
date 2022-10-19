import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonItem,
} from "@ionic/react";
import { add } from "ionicons/icons";

export const ViewRoutine = () => {
  return (
    <IonPage className="flex">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="pageTitle">
            <h1>Heatwaves</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="top" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <div className="timeline">
          <div className="timelineBarTop"></div>
          <div className="timelineBar"></div>
          <div className="timelineBarBottom"></div>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>
                {/* COMBINATION 1 */}
                <IonCard
                  className="combinationCard"
                  id="combinationCard"
                  draggable="true"
                  ref={Object}
                >
                  <IonCardContent>
                    <IonCardTitle>
                      <h5>Combination 1</h5>
                    </IonCardTitle>
                    <IonCardContent>
                      <IonList id="combinationList">
                        <IonItem>
                          <p>Invert</p>
                        </IonItem>
                        <IonItem>
                          <p>Butterfly</p>
                        </IonItem>
                        <IonItem>
                          <p>Scorpio</p>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
            <IonCol>
              <div>
                {/* COMBINATION 2 */}
                <IonCard
                  className="combinationCard"
                  id="combinationCard"
                  draggable="true"
                  ref={Object}
                >
                  <IonCardContent>
                    <IonCardTitle>
                      <h5>Combination 2</h5>
                    </IonCardTitle>
                    <IonCardContent>
                      <IonList id="combinationList">
                        <IonItem>
                          <p>Invert</p>
                        </IonItem>
                        <IonItem>
                          <p>Butterfly</p>
                        </IonItem>
                        <IonItem>
                          <p>Scorpio</p>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default ViewRoutine;
