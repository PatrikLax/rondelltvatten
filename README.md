# Rondelltvätten

Detta är en redesign av en redan existerande app för rondelltvätten i Borås.
Syftet med detta projekt är att skapa en bättre och modernare app.

## Installation

1. Installera beroenden

   ```bash
   npm install
   ```

2. Starta appen

   ```bash
   npm start
   ```

## Backend:

Minimal API skriven i C# (.NET) med Entity Framework Core och SQLite.

Backenden är deployad på Render och körs som en container. Den publika adressen är:

```bash
https://rondelltvatten.onrender.com
```

Viktigt att känna till:

- Tjänsten körs i en containeriserad miljö hos Render. Containerns filsystem är temporärt.
- Eftersom applikationen använder SQLite lagras databasen i containerns filsystem. När containern stängs av, startas om eller går ner i viloläge kommer den lokala SQLite-filen rensas vilket innebär att data som skrivs till SQLite på Render inte är beständig.

Övrigt:

- API:et kräver att anrop innehåller en header `X-API-Key` med giltig nyckel (annars returneras 401).
- I repot finns en `backend/reqest2.http` med exempelanrop som pekar mot den live-deployade backenden för enkel testning.
- Om du vill köra backend lokalt (valfritt) finns instruktioner för det i README; lokalt körd backend använder också SQLite men påverkar endast din maskin.

## expo components

```ts
-Haptics - BlurView - Location - Notifications;
```

## RN components

```ts
-View - Text - Pressable - Stylesheet - Alert - Scrollview;
```

## Krav för godkänt:

[x] Projektet använder minst 4 stycken RN-komponenter och minst 4 stycken Expo
komponenter.
[x] De utvalda komponenterna MÅSTE antecknas i README filen tillsammans med en
lista över genomförda krav.
[x] React Navigation används för att skapa en bättre upplevelse i appen.
[x] Git & GitHub har använts
[x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
[x] Uppgiften lämnas in i tid!
[x] Muntlig presentation är genomförd

## Krav för väl godkänt:

[x] Alla punkter för godkänt är uppfyllda
[x] Ytterligare en valfri extern modul används i projektet (ex. react-hook-form).
[x] Appen ska prata med ett Web-API för att hämta data.
[] Appen ska förberedas för lansering till en Appstore (Deadline samma dag som kursen
slutar)
.
