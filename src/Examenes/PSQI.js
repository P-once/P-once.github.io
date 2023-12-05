import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model, FunctionFactory } from 'survey-core';
import { Survey } from 'survey-react-ui';

const examenPSQI = {
    showQuestionNumbers: "off",
    showTimerPanel: "top",
    maxTimeToFinish: 600,
    firstPageIsStarted: true,
    startSurveyText: "Empezar",
    pages: [{
        elements: [
        {
            type: "html",
            html: "<h2>Examen Indice de Calidad de sueño de Pittsburgh</h2>"
        },{
            type: "html",
            html: "<label for='checkbox'> Al iniciar acepta los <a href='https://github.com/P-once/myApp/tree/main/src/terminos' target='_blank'>terminos y condiciones</a>.</label>"
        }],
        }, {
        elements: [
        {
            name: "psqi-1",
            type: "text",
            title: "1 - Durante el último mes, ¿cuál ha sido, normalmente, su hora de acostarse?",
            inputType: "time",
            min: "00:00",
            max: "23:59",
            isRequired: true
        },{
            name: "psqi-2",
            title: "2 - ¿Cuánto tiempo habrá tardado en dormirse, normalmente, las noches del último mes?",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Menos de15 min" },
                { value: 1, text: "Entre 16-30 min" },
                { value: 2, text: "Entre 31-60 min" },
                { value: 3, text: "Más de 60 min" },
            ],
            isRequired: true
        },{
            name: "psqi-3",
            type: "text",
            title: "3 - Durante el último mes, ¿a qué hora se ha levantado habitualmente por la mañana?",
            inputType: "time",
            min: "00:00",
            max: "23:59",
            isRequired: true
        },{
            name: "psqi-4",
            type: "text",
            title: "4 -  ¿Cuántas horas calcula que habrá dormido verdaderamente cada noche durante el último mes?",
            inputType: "number",
            min: "0",
            max: "24",
            isRequired: true
        },{
            name: "psqi-5",
            title: "5 - Durante el último mes, cuántas veces ha tenido usted problemas para dormir a causa de:",
            type: "expression"
        },{
            name: "psqi-5-a",
            title: "a) No poder concliliar el sueño en la primera media hora:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-b",
            title: "b) Despertarse durante la noche o de madrugada: ",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-c",
            title: "c) Tener que levantarse para ir al servicio: ",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-d",
            title: "d) No poder respirar bien:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-e",
            title: "e) Toser o roncar ruidosamente:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-f",
            title: "f) Sentir frío:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-g",
            title: "g) Sentir demasiado calor:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-h",
            title: "h) Tener pesadillas o malos sueños:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-i",
            title: "i) Sufrir dolores: ",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-5-j",
            title: "j) Otras razones. Por favor descríbalas:",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-6",
            title: "6 - Durante el último mes, ¿cómo valoraría en conjunto, la calidad de su sueño?",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Muy buena" },
                { value: 1, text: "Bastante buena" },
                { value: 2, text: "Bastante Mala" },
                { value: 3, text: "Muy mala" },
            ],
            isRequired: true
        },{
            name: "psqi-7",
            title: "7 - Durante el último mes, ¿cuántas veces habrá tomado medicinas (por su cuenta o recetadas por el médico) para dormir?",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-8",
            title: "8 - Durante el último mes, ¿cuántas veces ha sentido somnolencia mientras conducía, comía o desarrollaba alguna otra actividad?",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-9",
            title: "9 - Durante el último més, ¿ha representado para usted mucho problema el tener ánimos para realizar alguna de las actividades detalladas en la pregunta anterior?",
            type: "radiogroup",
            choices: [
                { value: 0, text: "Ninguna vez en el último mes" },
                { value: 1, text: "Menos de una vez a la semana" },
                { value: 2, text: "Una o dos veces a la semana" },
                { value: 3, text: "Tres o más veces a la semana" },
            ],
            isRequired: true
        },{
            name: "psqi-10",
            title: "10 -  ¿Duerme usted solo o acompañado? ",
            type: "radiogroup",
            choices: [
                { text: "Solo" },
                { text: "Con alguien en otra habitación" },
                { text: "En la misma habitación, pero en otra cama" },
                { text: "En la misma cama" },
            ],
            isRequired: true
        }]
    }]
};

function PSQI() {
  const survey = new Model(examenPSQI);
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

export default PSQI;
