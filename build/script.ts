let menuName: string[] = [
   "CLASSIC",
   "V.I.B. CHICKEN",
   "V.I.B. BEEF",
   "LORD BACON",
   "BIG BBQ BANG",
   "MEISTERSTÜCK",
   "Pommes Frites",
   "Country Potatoes",
   "Chicken Nuggets",
   "Miami",
   "Waikiki",
   "Alabama",
   "Florida",
];
let menuIngredients: string[] = [
   "Frisches Rindfleisch (150 g), Cheddar, Gurken-Relish, Tomaten, Eisbergsalat, Zwiebeln, BURGERISTA Sauce",
   "Frisch gegrilltes Chicken Filet (135 g), Cheddar, Eisbergsalat, Tomaten, Zwiebeln, Smokey Sauce, V.I.B. Sauce",
   "Frisches Rindfleisch (150 g), Cheddar, Eisbergsalat, Tomaten, Zwiebeln, Smokey Sauce, V.I.B. Sauce",
   "Frisches Rindfleisch (150 g), Cheddar, gegrillter Speck, Tomaten, Eisbergsalat, Zwiebeln, BURGERISTA Sauce",
   "Frisches Rindfleisch (150 g), Cheddar, gegrillter Speck, karamellisierte Zwiebeln, Eisbergsalat, Smokey Sauce",
   "Frisches Rindfleisch (150 g), Emmentaler, gegrillter Speck, Champignons, karamellisierte Zwiebeln, Eisbergsalat, BURGERISTA Sauce",
   "Knusprig lecker",
   "Kräftig würzig",
   "Leicht und lecker",
   "Knackig-frischer Blattsalat mit frischen Tomaten, Gurken, Cole Slaw, Kartoffelsalat und Rettich",
   "Gegrillte Putenstreifen, Orangenfilets, Tomaten und Gurken",
   "Panierte Champignons, Mais, Tomate, Gurken mit Knoblauch-Dip",
   "Putenfilet in Kokos-Panade, Ananas, Banane, Walnüsse, Tomaten und Gurke",
];
let menuPrice: number[] = [
   10.9, 12.9, 12.9, 13.9, 14.9, 15.9, 3.9, 4.4, 4.9, 6.9, 13.9, 13.9, 13.9,
];

//render menu list

function menuList() {
   let renderListMain = document.getElementById("renderMenus");
   if (renderListMain != null) {
      renderListMain.innerHTML = "";
   }
   for (let i = 0; i < menuName.length; i++) {
      let nameMenu: string = menuName[i];
      let ingredientsMenu: string = menuIngredients[i];
      let priceMenu: number = menuPrice[i];

      if (renderListMain != null) {
         renderListMain.innerHTML += `
          <div class="m-4 p-4 border-solid border-2 relative flex">
                           <div class="w-8/12">
                              <p class="text-lg mb-4 font-bold">${nameMenu}</p>
                              <p class="mb-2">${ingredientsMenu}</p>
                           </div>
                           <div class="w-4/12 flex justify-end items-end">
                              <p class="text-orange-400 text-3xl font-bold">${priceMenu.toFixed(
                                 2
                              )} €</p>
                           </div>
                           <div class="absolute top-0 right-0 border-b-2 border-l-2 hover:bg-orange-100"><svg
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                 stroke="currentColor" class="w-8 h-8">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                           </div>
                        </div>`;
      }
   }
}
