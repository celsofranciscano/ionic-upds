import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { ReactNode } from 'react';
import './Layout.css';

const departamentos = [
  'La Paz',
  'Cochabamba',
  'Santa Cruz',
  'Oruro',
  'Potosí',
  'Chuquisaca',
  'Tarija',
  'Beni',
  'Pando'
];

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Himnos de Bolivia</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="layout-content">
        <IonCard className="menu-card">
          <IonCardHeader>
            <IonCardTitle>Departamentos</IonCardTitle>
          </IonCardHeader>
          <IonList>
            {departamentos.map((dep) => (
              <IonItem
                key={dep}
                button
                routerLink={`/${dep.replace(/\s+/g, '').toLowerCase()}`}
                className="menu-item"
              >
                <IonLabel>{dep}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCard>

        <div className="page-content">
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Layout;
