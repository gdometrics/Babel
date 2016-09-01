
Router.route('/allwords');

import "./allwords.html";
import "./navbar.js";

import {Vocab} from "../api/vocab.js";





Template.allwords.helpers({



	tablesearch() {


		Meteor.subscribe('searchvocab', Session.get('searchQuery'));

		var filter1 = Vocab.find().fetch();

		return {filter1};

},



});

Template.allwords.events( 

{
	'keyup .searchbardiv input': _.debounce(function(event, template) 

	{

	event.preventDefault();

	Session.set('searchQuery', template.find('.searchbardiv input').value);
	

}, 300)




});







