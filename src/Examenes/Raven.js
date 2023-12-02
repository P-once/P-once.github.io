import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model, FunctionFactory } from 'survey-core';
import { Survey } from 'survey-react-ui';

var image =  "http://www.avlisad.com.ar/test/placas/1.png";

const examenRaven = {
    showQuestionNumbers: "off",
    showTimerPanel: "top",
    maxTimeToFinish: 600,
    pages: []
};



function newQuestions() {
  for(var i = 1; i <= 60; i++) {
    examenRaven.pages.push({
      elements: [{
        "type": "panel",
        "name": "panel" + i,
        "elements": [
          {
            type: "image",
            name: "surveyJS-integration-illustration",
            imageLink: "http://www.avlisad.com.ar/test/placas/" + i + ".png",
            imageHeight: 330, 
            imageWidth: 800,
            altText: "SurveyJS component integration"
          }
        ],
      },{
          type: "rating",
          name: "panel" + i + "-Answer",
          title: "Cuál es la figura que completa la imagen?",
          rateValues: [ 1, 2, 3, 4, 5, 6 ]
      }],
    });
  }
}

function Raven() {
  newQuestions();
  const survey = new Model(examenRaven);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.navigationBar.actions.find((x) => x.id === 'sv-nav-prev').visible = false;

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default Raven;
