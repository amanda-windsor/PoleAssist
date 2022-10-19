import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import "./RoutineBuilder.css";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCallback } from "react";
import Dropzone from "./Dropzone";

const routineBuilder = () => {
  return (
    <IonPage className="flex">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="pageTitle">
            <h1>Routine Builder</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DndProvider backend={HTML5Backend}>
          <div className="timeline">
            <div className="timelineBarTop"></div>
            <div className="timelineBar"></div>
            <div className="timelineBarBottom"></div>
          </div>
          <IonGrid>
            {/* COMBINATION 1 */}
            <IonRow>
              <IonCol>
                <div>
                  <IonCard
                    className="combinationCard"
                    id="combinationCard1"
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
                            <IonInput />
                          </IonItem>
                          <IonItem>
                            <IonInput />
                          </IonItem>
                          <IonItem>
                            <IonInput />
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                    </IonCardContent>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            {/* COMBINATION 2 */}
            <IonRow>
              <IonCol>
                <div>
                  <IonCard
                    className="combinationCard"
                    id="combinationCard2"
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
                            <IonInput />
                          </IonItem>
                          <IonItem>
                            <IonInput />
                          </IonItem>
                          <IonItem>
                            <IonInput />
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                    </IonCardContent>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            {/* COMBINATION 3 */}
            <IonRow>
              <IonCol>
                <div>
                  <IonCard
                    className="combinationCard"
                    id="combinationCard2"
                    draggable="true"
                    ref={Object}
                  >
                    <IonCardContent>
                      <IonCardTitle>
                        <h5>Combination 3</h5>
                      </IonCardTitle>
                      <IonCardContent>
                        <IonList id="combinationList">
                          <IonItem>
                            <IonInput />
                          </IonItem>
                          <IonItem>
                            <IonInput />
                          </IonItem>
                          <IonItem>
                            <IonInput />
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                    </IonCardContent>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </DndProvider>
        {/* */}
        {/* <div id="div1" onDrop={drop} onDragOver={allowDrop}></div> */}
      </IonContent>

      <script
        type="text/javascript"
        src="http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP"
      ></script>
    </IonPage>
  );
};

export default routineBuilder;
