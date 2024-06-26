import FirstComponent from'./FirstComponent';

//if braces aren't used here then default component is imported - breaces indicate not a default 
import { FifthComponent } from './FirstComponent';

//import FirstComponent, { FifthComponent } from'./FirstComponent';

import SecondComponent from'./SecondComponent';
import ThirdComponent from'./ThirdComponent';
import FourthComponent from'./FourthComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
    return(
    <div className="LearningComponent"> 
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
      <LearningJavaScript/>
    </div>
    )
}