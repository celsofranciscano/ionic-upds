import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Pando: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Pando</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Pando</h2>
        <p>
          Pando, tierra amazónica,<br />
          Verde selva y río caudal,<br />
          Tu nombre es símbolo de fuerza<br />
          Y libertad sin igual.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Pando;
