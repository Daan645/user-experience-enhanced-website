> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Ontwerp en maak met een team een dynamische familie pagina voor OBA met Node en data uit API.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
![image](https://github.com/Daan645/server-side-rendering-server-side-website/assets/54812898/cfd566ac-6448-48a1-9473-186c20c173ab)

Ik heb een familie pagina gemaakt voor OBA. Hiermee kun je kijken wie erin de familie zit en op hun profiel klikken. Wanneer erop geklikt is zie je de favorieten en geleende boeken van diegene.

Om de site te bekijken kan je hier bekijken:  https://server-side-rendering-server-side-website-op47.onrender.com/chooseprofile



## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
- Familie pagina
Hier worden alle profielen binnen de familie getoond, door op het gewenste profiel te klikken kun je hier details zien zoals: favorieten en geleende boeken.

- Persoonlijke pagina
Dit is je persoonlijke pagina je komt hier door op je profiel te klikken in het familieoverzicht. Hier kun je een overzicht aan boeken, cd's en activiteiten zien via de carousels. Ook kun je hier je geleende en favoriete items zien. Wanneer je op een item ziet wordt je doorgelinkt naar de detail pagina waar je meer over het desbetreffende item kunt lezen.

- Algemeene producten pagina
Hier kun je alle boeken, cd's en activiteiten zien. Door op een item te klikken krijg je ermeer details over.

- Detail pagina
Je komt op de detail pagina door een item aan te klikken via de persoonlijke of de algemene producten pagina. Hier kun je meer lezen over het item. Ook is er een knop met details zodra hier op geklikt wordt klapt deze uit en krijg je meer te zien over het item.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
### NodeJS

Node.js is een platform waarmee je server-side JavaScript kunt draaien. Het stelt je in staat om JavaScript-code uit te voeren op de server, waardoor je dynamische en interactieve webapplicaties kunt bouwen.

Express is een minimalistisch webframework voor Node.js. Het biedt een set van krachtige functies voor het ontwikkelen van webapplicaties en API's. Met Express kun je eenvoudig routes definiëren, HTTP-verzoeken afhandelen en middleware gebruiken om de functionaliteit van je applicatie uit te breiden.

EJS (Embedded JavaScript) is een template-engine voor Node.js waarmee je dynamische HTML-pagina's kunt genereren. Het stelt je in staat om JavaScript-code in je HTML-bestanden in te sluiten, waardoor je gegevens vanuit je server kunt presenteren en hergebruiken. EJS maakt het gemakkelijk om herbruikbare componenten te maken en de logica van je applicatie te scheiden van de presentatielaag.

### Progressive enhancement

![image](https://github.com/Daan645/the-web-is-for-everyone-interactive-functionality/assets/54812898/6106df70-bb37-46cd-873e-5a3d4439bd3f)


In dit project maak ik gebruik van progressive enhancement. Progressive enhancement gebruik je zodat je website bruikbaar is voor iederen. Je begint met het opmaken van de core functionaliteit. In mijn geval wou ik ervoor zorgen dat mensen een review kunnen bekijken door middel van de pop-up maar dat wordt lang niet door elke browser gebruikt. Je wilt er vanuit gaan dat de gebruiker misschien niet eens sommige html kan gebruiken of zelfs helemaal geen css of js.

Hoe ben ik te werk gegaan?

1. HTML
Ik heb ten eerste de html toegevoegd waaroor het formulier voor elke gebruiker zichtbaar is. Ook heb ik de elementen op caniuse opgezocht, en ben ik er zeker van dat deze ook nog werkt als de elementen niet ondersteund worden.

2. CSS
Ik heb de styling toegevoegd om zo het formulier wat duidelijker en mooier te maken

3. JS (enhancement)
Ik heb met javascript gezorgd dat het formulier tevoorschijn komt wanneer je op een knop drukt in de form van een pop-up. Wel heb ik ervoor gezorgd dat de browser standaard de html laat zien wanneer er geen js ondersteund wordt zodat deze voor iedereen bruikbaar is
## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. Fork deze repository
2. Clone de repository op eigen apparaat
3. Gebruik editor naar keuze


## Bronnen
- WHOIS API
- JSON
- EJS

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
