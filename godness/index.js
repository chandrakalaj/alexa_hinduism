/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');
var god_info = require('./god.js');
var festival_info = require('./festival.js');
//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.fb70fe39-cd37-4342-b3dc-744da3f71a06';

const SKILL_NAME = 'Hinduism';
const HELP_MESSAGE = 'You can ask me about Hindu Gods and famous hindu festivals celebrated in India. You can say stop to quit any time.';
const HELP_REPROMPT = HELP_MESSAGE;
const STOP_MESSAGE = 'Goodbye!';


//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        const reprompt = HELP_REPROMPT;
        this.response.cardRenderer(SKILL_NAME, HELP_MESSAGE);
        this.response.speak(HELP_REPROMPT);
        this.emit(':ask',HELP_REPROMPT,HELP_REPROMPT);
    },
    'godness': function () {

        var god = this.event.request.intent.slots.god.value;
        console.log("God::::::"+god);
        const factArr = god_info.fact(god);
        var speechOutput = null;
        if(factArr){
            var factIndex = Math.floor(Math.random() * factArr.length);
            var randomFact = factArr[factIndex];
            speechOutput = randomFact;
            console.log("output::::::"+speechOutput);
            this.response.cardRenderer(SKILL_NAME, randomFact);
            this.response.speak(speechOutput);
            this.emit(':responseReady');
        }else{
            speechOutput = "I am learning. As of now, I do not know about Lord " + god; 
            this.emit(':tell', speechOutput);
        }
    },
    'festivals': function(){
        var festival = this.event.request.intent.slots.festival.value;
        console.log("festival::::::"+festival);
        var info = festival_info.fact(festival);
        var speechOutput = null;
        if(info){
            speechOutput = info;
            console.log("output::::::"+speechOutput);
            this.response.cardRenderer(SKILL_NAME, speechOutput);
            this.response.speak(speechOutput);
            this.emit(':responseReady');

        }else if(festival){
            speechOutput = "I am learning. As of now, I do not know about " + festival;
            console.log("output::::::"+speechOutput);
            this.response.cardRenderer(SKILL_NAME, speechOutput);
            this.response.speak(speechOutput);
            this.emit(':responseReady');
        }else{
            speechOutput = "I am sorry I couldn't get that.";
            this.emit(':responseReady');
        } 
       
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function () {
        const speech_output = 'Goodbye and take care!'
        this.emit(':tell', speech_output);
    },
    'Unhandled': function () {
        const speech_output = 'Goodbye and take care!'
        this.emit(':tell', speech_output);
   },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
