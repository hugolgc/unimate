import {
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export function HomeIndex(): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar placeholder="Chercher un service" />
        <h2 className="ion-padding-horizontal">Événements à venir</h2>
        <IonCard>
          <img
            alt="Beer pong"
            src="https://gentlemanmoderne.com/wp-content/uploads/2018/01/Biere-Pong-meilleur-kit-regle-du-jeu.jpg"
          />
          <IonCardHeader>
            <IonCardTitle>Beer pong</IonCardTitle>
            <IonCardSubtitle>Jeudi 24 Nov.</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <h2 className="ion-padding-horizontal">Vos activités</h2>
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <span className="text-30px">📦</span>
            </IonAvatar>
            <IonLabel>
              <h2>Léo a votre colis</h2>
              <p>Étage 2 • Porte 22</p>
            </IonLabel>
            <IonChip color="warning">En attente</IonChip>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <span className="text-30px">🫧</span>
            </IonAvatar>
            <IonLabel>
              <h2>Machine n°3</h2>
              <p>Étage 1 • Porte 16</p>
            </IonLabel>
            <IonChip color="success">Terminé</IonChip>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <span className="text-30px">🎉</span>
            </IonAvatar>
            <IonLabel>
              <h2>Soirée étudiante</h2>
              <p>Jeudi 24 Nov. à 21:30</p>
            </IonLabel>
            <IonChip color="secondary">À venir</IonChip>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
