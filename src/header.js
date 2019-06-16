document.write('aaaa')

let SummarizerManager = require("node-summarizer").SummarizerManager;

let text_to_summarize = `A massive electrical failure has left almost all of Argentina and Uruguay without power, according to a major Argentine electricity provider.

Parts of Paraguay were also affected, a state energy company said.

Argentine media said the power cut occurred shortly after 07:00 (11:00 BST), causing trains to be halted and failures with traffic signalling.

It came as people in parts of Argentina were preparing to go to the polls for local elections.

What do we know about the blackout?
"A massive failure in the electrical interconnection system left all of Argentina and Uruguay without power," electricity supply company Edesur said in a tweet.

Alejandra Martinez, a spokeswoman for the company, described the power cut as unprecedented.

"This is the first time something like this has happened across the entire country."

Argentina's energy secretary, Gustavo Lopetegui, said the cause of the power failure had not yet been determined. The Ministry of Civil Protection estimated that parts of the service could be restored in about seven or eight hours.

Edesur said that power had been restored over 75,00 clients in parts of Buenos Aires and local media reported that two airports were operating on generators in the capital.

Uruguay's energy company, UTE, said in a series of tweets that power had been restored to coastal areas and to areas north of Rio Negro.

How have people been affected?
The combined population of Argentina and Uruguay is about 48 million people.

Among the affected provinces in Argentina were Santa Fe, San Luis, Formosa, La Rioja, Chubut, Cordoba and Mendoza, reports said. Tierra del Fuego in the far south is the only area that remains unaffected because it is not connected to the power grid.

Paraguay's National Administration of Electricity (ANDE), said in a tweet that parts of Ayolas, Pilar, Villalbín and the border areas of Misiones and Ñeembucú were also without power.

One of Argentina's biggest water companies, Agua y Saneamientos Argentinos, warned those without power to limit their water use, as the distribution of drinking water had been affected by the power cut.

Social media reports of the power were widespread - from the capital Buenos Aires in the north, to Mendoza in the west and Comodoro Rivadavia in the south, among many other cities. Residents posted pictures of dark towns and cities using the hashtag #SinLuz.

The BBC's Marcia Carmo in Buenos Aires says people there have been communicating on Whatsapp to pass on information about cafes in the city which appear to have power. Subway services are no longer running.

Local media have been showing voters casting their local election ballots in the dark, with mobile phones being used as lanterns.`
let number_of_sentences = 5

let Summarizer = new SummarizerManager(text_to_summarize,number_of_sentences); 

let displaySummary = (summary) => {
  summary.split('.').forEach((s) => {
    console.log(s.trim())
  })
}

// -----------------------

//displaySummary(Summarizer.getSummaryByFrequency().summary)

// -----------------------

/*
Summarizer.getSummaryByRank().then((summary_object)=>{
  let summary = summary_object.summary
  displaySummary(summary)
})
*/

// ---------------

console.log(Summarizer.getFrequencyReductionAsDec().dec_reduction)
