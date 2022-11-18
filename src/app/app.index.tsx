import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { HomeIndex } from "./home/home.index";
import { calendar, chatbubbleEllipses, home, navigate } from "ionicons/icons";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";

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
import "../assets/variables.css";
import "../assets/custom.css";

setupIonicReact({ mode: "ios" });

export function AppIndex(): JSX.Element {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <HomeIndex />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="HomeIndex" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Accueil</IonLabel>
            </IonTabButton>
            <IonTabButton tab="PlanningIndex" href="/planning">
              <IonIcon icon={calendar} />
              <IonLabel>Planning</IonLabel>
            </IonTabButton>
            <IonTabButton tab="MapIndex" href="/map">
              <IonIcon icon={navigate} />
              <IonLabel>Carte</IonLabel>
            </IonTabButton>
            <IonTabButton tab="ChatIndex" href="/chat">
              <IonIcon icon={chatbubbleEllipses} />
              <IonLabel>Messages</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
