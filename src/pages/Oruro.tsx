import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Oruro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Oruro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Oruro</h2>
        <p>
          Oruro, cuna de leyendas,<br />
          Con tu cerro protector,<br />
          Tus mineros y tus fiestas,<br />
          Inspiran nuestro honor.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Oruro;
