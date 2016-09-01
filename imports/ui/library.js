Router.route('library');

import "./library.html";
import "./navbar.js";

import { Vocab } from "../api/vocab.js";



Template.library.helpers({



	catlist()
{

	//preventDefault();

	//var catcheck;

	Meteor.subscribe('searchvocab');
	
	var everything = Vocab.find().fetch();


	var categories = _.pluck(everything, 'category');
	var ucategories = _.uniq(categories);
	

	return {ucategories, everything}

},

	catdet(catcheck)

{ 
	
	//var catcheck1 = JSON.stringify(catcheck);

	var catcheck1 = JSON.stringify(catcheck.hash.catcheck);

	console.log(catcheck1);

	var filtereddata = Vocab.find({category:catcheck.hash.catcheck}).fetch();


	return {filtereddata}


},

});

Template.library.helpers({

isTrue(){

	if (Session.get("editon")==true)

	return true
},

});