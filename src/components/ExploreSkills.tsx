import './ExploreContainer.css';
import { IonCard,IonCardContent,IonCardTitle,IonCardSubtitle, IonCardHeader, IonTabBar, IonTabButton, IonLabel, IonIcon, IonAccordionGroup, IonItem} from '@ionic/react';
import { calendarOutline, clipboardOutline, stopwatchOutline, timerOutline, trophyOutline } from 'ionicons/icons';

interface ContainerProps { }

const ExploreSkills: React.FC<ContainerProps> = () => {
  return (
    <div className='container'>
      <IonCard>
        <IonAccordionGroup expand='inset'>
            <IonItem slot='header'>
                <IonLabel>Level 1</IonLabel>
            </IonItem>
        </IonAccordionGroup>
      </IonCard>
      </div>
  );
};

export default ExploreSkills;
