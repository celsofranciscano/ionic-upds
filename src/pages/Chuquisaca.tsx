import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Chuquisaca: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Chuquisaca</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Chuquisaca</h2>
        <p>
          Chuquisaca noble y antigua,<br />
          Cuna del pensamiento,<br />
          Tu historia nos inspira<br />
          Y nos llena de aliento.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Chuquisaca;
