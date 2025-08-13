import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Cochabamba: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Himno de Cochabamba</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Himno de Cochabamba</h2>
        <p>
          Salve, tierra de los valles,<br />
          Donde el sol brilla sin cesar,<br />
          Tu nombre evoca gloria,<br />
          Que nadie podrá apagar.<br />
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Cochabamba;
