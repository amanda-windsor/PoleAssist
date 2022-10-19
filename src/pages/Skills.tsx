import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonAccordionGroup,
  IonItem,
  IonAccordion,
  IonCheckbox,
  IonListHeader,
  IonList,
  IonIcon,
} from "@ionic/react";
import { lockClosedOutline } from "ionicons/icons";

import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="pageTitle">
            <h1>Skills</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAccordionGroup
          multiple
          animated
          expand="inset"
          id="skillsAccordionGroup"
        >
          {/* /* LEVEL 1 */}
          <IonAccordion value="first" id="skillsContainer">
            <IonItem slot="header">
              <IonLabel className="levelLabel">Level 1</IonLabel>
            </IonItem>
            <div slot="content">
              <IonListHeader>
                <IonLabel>
                  <p className="checkboxLabels">L R</p>
                </IonLabel>
              </IonListHeader>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Lazy Drag</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Fireman</p>
                </IonLabel>{" "}
                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Dive</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
            </div>
          </IonAccordion>
          {/* /* LEVEL 2 */}
          <IonAccordion value="second">
            <IonItem slot="header">
              <IonLabel className="levelLabel">Level 2</IonLabel>
            </IonItem>
            <div slot="content">
              <IonListHeader>
                <IonLabel>
                  <p className="checkboxLabels">L R</p>
                </IonLabel>
              </IonListHeader>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Basic Invert</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Crucifix</p>
                </IonLabel>{" "}
                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Butterfly</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
            </div>
          </IonAccordion>
          {/* /* LEVEL 3 */}
          <IonAccordion value="third">
            <IonItem slot="header">
              <IonLabel className="levelLabel">Level 3</IonLabel>
            </IonItem>
            <div slot="content">
              <IonListHeader>
                <IonLabel>
                  <p className="checkboxLabels">L R</p>
                </IonLabel>
              </IonListHeader>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Scorpio</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Gemini</p>
                </IonLabel>{" "}
                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Angel</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
            </div>
          </IonAccordion>
          {/* /* LEVEL 4 */}
          <IonAccordion value="fourth">
            <IonItem slot="header">
              <IonLabel className="levelLabel">Level 4</IonLabel>
            </IonItem>
            <div slot="content">
              <IonListHeader>
                <IonLabel>
                  <p className="checkboxLabels">L R</p>
                </IonLabel>
              </IonListHeader>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Aerial Invert</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Tammy</p>
                </IonLabel>{" "}
                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Princess</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
            </div>
          </IonAccordion>
          {/* /* LEVEL 5 */}
          <IonAccordion value="fifth" disabled>
            <IonItem slot="header">
              <IonLabel className="levelLabel">Level 5</IonLabel>
              <IonIcon icon={lockClosedOutline} />
            </IonItem>
            <div slot="content">
              <IonListHeader>
                <IonLabel>
                  <p className="checkboxLabels">L R</p>
                </IonLabel>
              </IonListHeader>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Aerial Invert</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Tammy</p>
                </IonLabel>{" "}
                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
              {/* TRICK AND CHECKBOX SLOT */}
              <IonItem>
                <IonLabel>
                  <p className="trickLabel">Princess</p>
                </IonLabel>

                <IonCheckbox id="checkboxLeft" />
                <IonCheckbox id="checkboxRight" />
              </IonItem>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Skills;
