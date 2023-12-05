import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model, FunctionFactory } from 'survey-core';
import { Survey } from 'survey-react-ui';

const examenMiniCog = {
    showQuestionNumbers: "off",
    showTimerPanel: "top",
    maxTimeToFinish: 600,
    maxTimeToFinishPage: 20,
    firstPageIsStarted: true,
    startSurveyText: "Empezar",
    pages: [{
        elements: [
        {
            type: "html",
            html: "<h2>Examen Minivog</h2>"
        },{
            type: "html",
            html: "<label for='checkbox'> Al iniciar acepta los <a href='https://github.com/P-once/myApp/tree/main/src/terminos' target='_blank'>terminos y condiciones</a>.</label>"
        }],
        }, {
        elements: [{
            name: "MiniCog-1",
            title: "Debera recordar estas 3 palabras para mas tarde:",
            type: "expression"
        }, {
            name: "papel",
            title: "papel",
            type: "expression"
        }, {
            type: "expression",
            name: "bicicleta",
            title: "bicicleta",
        }, {
            type: "expression",
            name: "cuchara",
            title: "cuchara",
        }],
    },{
        elements: [
        {
            type: "imagepicker",
            name: "Cual de estos relojes marca el tiempo a las 11:10?",
            choices: [
                {
                    value: "Image 1",
                    imageLink: require('../Imgs/Time1.PNG')
                },
                {
                    value: "Image 2",
                    imageLink: require('../Imgs/Time2.PNG')
                },
                {
                    value: "Image 3",
                    imageLink: require('../Imgs/Time3.PNG')
                },
                {
                    value: "Image 4",
                    imageLink: require('../Imgs/Time4.PNG')
                }],
            imageFit: "cover",
            correctAnswer: "Image 1",
        }],
    }, {
        elements: [{
            name: "Palabras",
            title: "Escribir las 3 palabras que se mostraron anteriormente:",
            type: "expression"
        }, {
            type: "text",
            name: "palabra1",
            title: "Palabra:",
        }, {
            type: "text",
            name: "palabra2",
            title: "Palabra:",
        }, {
            type: "text",
            name: "palabra3",
            title: "Palabra:",
        }],
    }]
};

function MiniCog() {
  const survey = new Model(examenMiniCog);
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

export default MiniCog;
