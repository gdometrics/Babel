Router.route('feed');

import "./feed.html";
import "./navbar.js";

import { Vocab } from "../api/vocab.js";

//import { Template } from 'meteor/templating';
//import { ReactiveDict } from 'meteor/reactive-dict';

Session.set('formcheck', '');

//Template.feed.onCreated(function feedOnCreated() {
//  Meteor.subscribe('searchvocab');
//});

Template.feed.helpers({

	randomword()
{



//	preventDefault();

	Meteor.subscribe('searchvocab');

	var words = Vocab.find().fetch();

	var randomword1 = Random.choice(words);

	
	Session.set('testword', randomword1.engword);

	var testword = Session.get('testword');

	return	{randomword1}
		


},

	formcheck()
	{

	

	var formcheck = Session.get('formcheck');



	return formcheck
	
	}






});


Template.feed.events({

	'submit .wordcheck' (event)

	{
		event.preventDefault();

		var testword = Session.get('testword').toLowerCase();

		var enganswer = event.target.enganswerid.value.toLowerCase();
	
		var formcheck = Session.get("formcheck");

		

	if (testword == enganswer) {

			var formcheck = "has-error";

		

			Session.set('formcheck', 'has-success');

		} else { 

			Session.set('formcheck', 'has-error');

			};
	},

	// need to set up a button for .wordcheck maybe separate it from the form

	'click .nextword': function(event, template)

	{
	
	Meteor.subscribe('searchvocab');

	var words = Vocab.find().fetch();

	var randomword1 = Random.choice(words);

	
	Session.set('testword', randomword1.engword);

	var testword = Session.get('testword');

	template.find(".form-control").value = '';

	return	{randomword1}

	},

	'click .showword': function(answerdiv)

	{
		console.log('showword click');

		jQuery('#answerdiv').toggle('show');

	},



});
