import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Beni: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Beni</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Beni</h2>
        <p>
          Beni de ríos y selvas,<br />
          Tu riqueza natural,<br />
          Nos llena de orgullo<br />
          Y de amor fraternal.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Beni;
