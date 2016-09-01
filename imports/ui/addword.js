Router.route('/addword'); // defines the route



import "./addword.html";
import "./navbar.js";

import { Vocab } from "../api/vocab.js";
import { Meteor } from 'meteor/meteor';


Template.addword.events({



	'submit .new-word' (event)

		{
			event.preventDefault();

// need to target the event for the value to pass to variable to pass to database

			var newengword = event.target.newengword.value.toLowerCase();
			var newvietword = event.target.newvietword.value.toLowerCase();
			var newcategory = event.target.newcategory.value.toLowerCase();

			console.log(newengword);

			if (!newcategory)

			{ console.log('cat undefined');
			   newcategory = "blank"; };
			
			if (newengword && newvietword)

			{

			Vocab.insert
				({
					engword: newengword,
					vietword: newvietword,
					category: newcategory,
					owner: Meteor.userId(),
      				username: Meteor.user().username,
      			});


			console.log("form submitted");

			event.target.reset();

			} else 

			{ 

			console.log('bad form'); 

			};

		


		},



});