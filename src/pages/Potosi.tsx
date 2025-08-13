import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Potosi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Potosí</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Potosí</h2>
        <p>
          Potosí, alto y glorioso,<br />
          Tesoro de la nación,<br />
          Tu plata y tu coraje<br />
          Son orgullo y admiración.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Potosi;
