import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tarija: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Tarija</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Tarija</h2>
        <p>
          Tarija de valles y viñedos,<br />
          Perfume de flores y sol,<br />
          Tu gente noble y valiente<br />
          Nos llena de inspiración.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tarija;
