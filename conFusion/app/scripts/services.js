'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        /*var promotions = [
            {
                _id: 0,
                name: 'Weekend Grand Buffet',
                image: 'images/buffet.png',
                label: 'New',
                price: '19.99',
                description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
            }

        ];
        */

        var promotions = {};

        this.getDishes = function () {
            return $resource(baseURL + "dishes/:id", null, {'update': {method: 'PUT'}});
        };


        this.getPromotion = function () {
            //return promotions[0];
            return $resource(baseURL + "promotions/:id", null, {'get': {method: 'GET'}});
        };
        // implement a function named getPromotion
        // that returns a selected promotion.


    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        var corpfac = {};

        corpfac.getLeaders = function () {
            return $resource(baseURL + "leadership/:id", null, {'get': {method: 'GET'}});
        };


        return corpfac;
        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        // Remember this is a factory not a service


    }])
    .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        var feedBackFac={};

        feedBackFac.getFeedback = function () {
            return $resource(baseURL + "feedback", null, {'save': {method: 'POST'}});
        };

        return feedBackFac;
    }])
;
