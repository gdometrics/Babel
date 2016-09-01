import { Meteor } from 'meteor/meteor';


import { Vocab } from '../imports/api/vocab.js';

Meteor.startup(() => {
  // code to run on server at startup

Vocab._ensureIndex({
  'engword': 'text',
  'vietword': 'text',
  'category': 'text'
});



Meteor.publish('allvocab', 

function showall() {

var currentUser = this.userId; 

return Vocab.find({owner:currentUser})
});



Meteor.publish('searchvocab',

function showsearch(searchQ)
	{

		var currentUser = this.userId; 


		if (searchQ)
		{

			return Vocab.find
			(
			
			{ owner:currentUser, $text: {$search: searchQ} }

    		)
		}
  		else 
  		{
  			return Vocab.find({owner:currentUser});
		};
});

});