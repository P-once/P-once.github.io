import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model, FunctionFactory } from 'survey-core';
import { Survey } from 'survey-react-ui';

const examenMoca = {
    showQuestionNumbers: "off",
    showTimerPanel: "top",
    maxTimeToFinish: 600,
    maxTimeToFinishPage: 30,
    firstPageIsStarted: true,
    startSurveyText: "Empezar",
    pages: [{
        elements: [
        {
            type: "html",
            html: "<h2>Examen MOCA</h2>"
        },{
            type: "html",
            html: "<label for='checkbox'> Al iniciar acepta los <a href='https://github.com/P-once/myApp/tree/main/src/terminos' target='_blank'>terminos y condiciones</a>.</label>"
        }],
        }, {
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
                name: "Seccion Animales",
                title: "Identifique los siguientes animales",
                type: "expression",
            }, {
                type: "image",
                name: "lion-img",
                imageLink: "https://2.bp.blogspot.com/-oDyrjSe6G5M/Ulg8pecsLpI/AAAAAAAA5hU/c_URXqSBe58/s1600/Leon%252B%252525282%25252529.png",
                imageFit: "cover",
                imageHeight: "auto",
                imageWidth: "100%"
            }, {
                type: "text",
                name: "lion-Answer",
                title: "Cual es este animal?",
            }, {
                type: "image",
                name: "rhino-img",
                imageLink: "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/08/rhinoceros-coloring-page.png",
                imageFit: "cover",
                imageHeight: "auto",
                imageWidth: "100%"
            }, {
                type: "text",
                name: "rhino-Answer",
                title: "Cual es este animal?",
            }, {
                type: "image",
                name: "camel-img",
                imageLink: "https://comodibujar.club/wp-content/uploads/2018/05/como-dibujar-un-camello.jpg",
                imageFit: "cover",
                imageHeight: "auto",
                imageWidth: "100%"
            }, {
                type: "text",
                name: "camel-Answer",
                title: "Cual es este animal?",
                visibleIf: ""
            }],
        }, {
            elements: [{
                name: "Rostro",
                title: "Rostro",
                type: "expression"
                
            }, {
                type: "expression",
                name: "Seda",
                title: "Seda",
            }, {
                type: "expression",
                name: "Templo",
                title: "Templo",
            }, {
                type: "expression",
                name: "Clavel",
                title: "Clavel",
            }, {
                type: "expression",
                name: "Rojo",
                title: "Rojo",
            }],
        }, {
            elements: [{
                name: "Palabras",
                title: "Escribir las 5 palabras que se mostraron anteriormente:",
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
            }, {
                type: "text",
                name: "palabra4",
                title: "Palabra:",
            }, {
                type: "text",
                name: "palabra5",
                title: "Palabra:",
            }],
        }, {
            elements: [{
                name: "Segunda",
                title: "Ahora se mostara la misma lista de palabras una vez más. Intente acordarse del mayor número posible de palabras, incluyendo las que respondio en la primera ronda",
                type: "expression"
            },{
                name: "Rostro",
                title: "Rostro",
                type: "expression"
                
            }, {
                type: "expression",
                name: "Seda",
                title: "Seda",
            }, {
                type: "expression",
                name: "Templo",
                title: "Templo",
            }, {
                type: "expression",
                name: "Clavel",
                title: "Clavel",
            }, {
                type: "expression",
                name: "Rojo",
                title: "Rojo",
            }]

        }, {
            elements: [{
                name: "Palabras",
                title: "Escribir las palabras que se mostraron:",
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
            }, {
                type: "text",
                name: "palabra4",
                title: "Palabra:",
            }, {
                type: "text",
                name: "palabra5",
                title: "Palabra:",
            }],
        }, {
            elements: [{
                name: "5-Palabras",
                title: "Estas palabras se preguntaran al final de la prueba.",
                type: "expression"
            }],
        }, {
            elements: [{
                name: "5-Numeros",
                title: "75186",
                type: "expression"
            }],
        }, {
            elements: [{
                name: "Palabras",
                title: "Escribir el numero mostrado anteriormente:",
                type: "expression"
            }, {
                type: "text",
                name: "numero",
                title: "Numero:",
            }],
        }, {
            elements: [{
                name: "3-Numeros",
                title: "649",
                type: "expression"
            }],
        }, {
            elements: [{
                name: "Palabras",
                title: "Escribir el numero mostrado anteriormente hacia atras:",
                type: "expression"
            }, {
                type: "text",
                name: "numero",
                title: "Numero:",
            }],
        }, {
            elements: [{
                name: "Frase",
                title: "Solo sé que le toca a Juan ayudar hoy",
                type: "expression"
            }],
        }, {
            elements: [{
                name: "Frase",
                title: "Escribir la frase de la pagina anterior:",
                type: "expression"
            }, {
                type: "text",
                name: "Frase",
                title: "Frase:",
            }],
        }, {
            elements: [{
                name: "Frase",
                title: "El gato siempre se esconde debajo del sofá cuando hay perros en la habitación",
                type: "expression"
            }],
        }, {
            elements: [{
                name: "Frase",
                title: "Escribir la frase de la pagina anterior:",
                type: "expression"
            }, {
                type: "text",
                name: "Frase",
                title: "Frase:",
            }],
        }, {
            elements: [{
                name: "Palabras",
                title: "Anteriormente se habia presentado 5 palabras, escribir las que recuerde: ",
                type: "expression"
            }, {
                type: "text",
                name: "palabraRecordada1",
                title: "Palabra:",
            }, {
                type: "text",
                name: "palabraRecordada2",
                title: "Palabra:",
            }, {
                type: "text",
                name: "palabraRecordada3",
                title: "Palabra:",
            }, {
                type: "text",
                name: "palabraRecordada4",
                title: "Palabra:",
            }, {
                type: "text",
                name: "palabraRecordada5",
                title: "Palabra:",
            }],
        }, {
            elements: [{
                type: "multipletext",
                name: "PalabraAyuda1",
                title: "Primera Palabra: ",
                visibleIf: "{palabraRecordada1} != 'Rostro'",
                items: [{
                    name: "palabra1_Ayuda",
                    title: "Era una parte del cuerpo",
                    inputType: "text",
                }]
            }, {
                type: "multipletext",
                name: "PalabraAyuda2",
                title: "Segunda Palabra: ",
                visibleIf: "{palabraRecordada2} != 'Seda'",
                items: [{
                    name: "palabra2_Ayuda",
                    title: "Es un tipo de tela",
                    inputType: "text",
                }]
            }, {
                type: "multipletext",
                name: "PalabraAyuda3",
                title: "Tercera Palabra: ",
                visibleIf: "{palabraRecordada3} != 'Templo'",
                items: [{
                    name: "palabra3_Ayuda",
                    title: "Un tipo de edificio",
                    inputType: "text",
                }]
            }, {
                type: "multipletext",
                name: "PalabraAyuda4",
                title: "Cuarta Palabra: ",
                visibleIf: "{palabraRecordada4} != 'Clavel'",
                items: [{
                    name: "palabra4_Ayuda",
                    title: "Es un tipo de flor",
                    inputType: "text",
                }]
            }, {
                type: "multipletext",
                name: "PalabraAyuda5",
                title: "Quinta Palabra: ",
                visibleIf: "{palabraRecordada5} != 'Rojo'",
                items: [{
                    name: "palabra5_Ayuda",
                    title: "Un color",
                    inputType: "text",
                }]
            }],
        }, {
            elements: [{
                name: "Hoy",
                title: "Escribir las respuestas en base al dia de hoy",
                type: "expression"
            }, {
                name: "DiaNumero",
                title: "Numero de dia",
                type: "text"
            }, {
                type: "text",
                name: "Mes",
                title: "Mes:",
            }, {
                type: "text",
                name: "Año",
                title: "Año:",
            }, {
                type: "dropdown",
                name: "Dia",
                title: "Dia:",
                choices: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ]
            }],
    }]
};

function Moca() {
  const survey = new Model(examenMoca);
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

export default Moca;
