import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Routines from "./pages/Routines";
import TrainingPlan from "./pages/trainingPlan";
import Settings from "./pages/Settings";
import RoutineBuilder from "./components/RoutineBuilder";
import Workout from "./pages/Workout";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import {
  calendarOutline,
  home,
  trophyOutline,
  settingsOutline,
  clipboardOutline,
} from "ionicons/icons";
import RoutineViewer from "./components/RoutineViewer";
import Splash from "./components/Splash";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route exact path="/Splash"></Route>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/Routines">
            <Routines />
          </Route>
          <Route exact path="/trainingPlan">
            <TrainingPlan />
          </Route>
          <Route exact path="/RoutineBuilder">
            <RoutineBuilder />
          </Route>
          <Route exact path="/Settings">
            <Settings />
          </Route>
          <Route exact path="/Workout">
            <Workout />
          </Route>
          <Route exact path="/RoutineViewer">
            <RoutineViewer />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="trainingPlan" href="/trainingPlan">
            <IonIcon icon={calendarOutline}></IonIcon>
          </IonTabButton>

          <IonTabButton tab="skills" href="/skills">
            <IonIcon icon={trophyOutline}></IonIcon>
          </IonTabButton>

          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} id="homeIcon"></IonIcon>
          </IonTabButton>

          <IonTabButton tab="Routines" href="/Routines">
            <IonIcon icon={clipboardOutline}></IonIcon>
          </IonTabButton>

          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline}></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
