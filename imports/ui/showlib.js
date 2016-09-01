import "./showlib.html";
import "./navbar.js";

import { Vocab } from "../api/vocab.js";



Template.showlib.events({


	'click .delete': function(k)

		{
	
			Vocab.remove(this.k._id);

		},

  'click .edit': function(k)

    {

      Session.set("editon",true);

      var editon = Session.get("editon");

      console.log(editon);

    },

});

