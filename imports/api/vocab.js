import { Mongo } from 'meteor/mongo';

// need to import mongo to make db
 
export const Vocab = new Mongo.Collection('Vocab');

 
//if (Meteor.isServer) {
  // This code only runs on the server
//  Meteor.publish('Vocab', 
//
//  	function searchvocab() {
//  		if (searchterm) {
//
//  		return Vocab.find(
//    { 
//    	$engword: {$search: searchterm},
//    	$vietword: {$search: searchterm},
//    	$category: {$search: searchterm}
//    }) }
//  	else {
//  		return Vocab.find();
//  	}
//  		})};
