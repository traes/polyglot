//////////////////////////
//	Language	//
//////////////////////////

function language()
{
	this.verbs		= {};
	this.verbNames 		= []; // example: ['ser','estar, ...]
	this.personNames	= []; // example: ['yo','tú','el','ella',...]
	this.personNumbers	= {}; // example: ['yo':0, 'tú':1, ...]

	// returns a random element from a given list
	this.randomElement = function(values)
	{
		var index = Math.floor(Math.random() * values.length);
		return values[index];
	}

	// example: setPersons([['yo'],['tú'],['el','ella'],...]);
	this.setPersons = function(values)
	{
		for(var i = 0; i < values.length; i++)
		{
			for(j = 0; j < values[i].length; j++)
			{
				var name = values[i][j];
				this.personNames.push(name);
				this.personNumbers[name] = i;
			}
		} 	
	}

	// example: addVerb('ser');
	this.addVerb = function(verbName)
	{
		this.verbNames.push(verbName);
		this.verbs[verbName] = {};
	}

	// creates an array with all the time names for a given verb
	this.getTimeNames = function(verbName)
	{
		var result = [];
		for(name in this.verbs[verbName])
		{
			result.push(name);
		}
		return result;
	}
	
	// generates a random question
	// TODO: check for unexisting combinations (i.e. first person imperative)
	this.generateQuestion = function()
	{
		var question		= function() {};
		question.verbName	= this.randomElement(this.verbNames);
		question.timeName	= this.randomElement(this.getTimeNames(question.verbName));
		question.personName	= this.randomElement(this.personNames);

		return question;
	}

	// checks whether a given answer is correct
	this.checkAnswer = function(question,answer)
	{
		var personNumber	= this.personNumbers[question.personName];
		var expected		= this.verbs[question.verbName][question.timeName][personNumber];
		
		return (answer == expected);
	}

	return this;
}

