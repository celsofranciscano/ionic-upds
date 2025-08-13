import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const LaPaz: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de La Paz</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de La Paz</h2>
        <p>
          ¡Es la paz la dulce calma<br />
          Que aliviando el corazón,<br />
          Nos conduce a la ventura,<br />
          Y nos da satisfacción!<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default LaPaz;
