import React from "react";
import { Virtuoso } from "react-virtuoso";
import {
  IonAvatar,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
const Scroller: React.FC = () => (
  <IonPage>
    <IonContent>
      <Virtuoso
        style={{ height: "100%" }}
        totalCount={100}
        itemContent={(index) => {
          return (
            <div style={{ height: "56px" }}>
              <IonItem>
                <IonAvatar slot="start">
                  <img
                    src="https://picsum.photos/seed/picsum/40/40"
                    alt="test"
                  />
                </IonAvatar>
                <IonLabel>{index}</IonLabel>
              </IonItem>
            </div>
          );
        }}
      />
    </IonContent>
  </IonPage>
);
export default Scroller;
