import "./editing.html";
import "./navbar.js";

import { Vocab } from "../api/vocab.js";


Template.editing.events({


'click .delete': function(k)

		{
	
			Vocab.remove(this.k._id);

		},

'click .save': function(event, template)

		{
			event.preventDefault();

// need to target the event for the value to pass to variable to pass to database

			var newengword = template.find(".newengword").value;
			var newvietword = template.find(".newvietword").value;
			var newcategory = template.find(".newcategory").value;

			console.log(newengword);

			if (!newcategory) { newcategory = "blank"}

			if (newengword && newvietword) {

			Vocab.update
				(this.k._id,{
					engword: newengword,
					vietword: newvietword,
					category: newcategory,
					owner: Meteor.userId(),
					username: Meteor.user().username
				});

			console.log("form submitted");

			Session.set("editon", false);

			event.target.reset();

			} else console.log('bad form');


		},
});

