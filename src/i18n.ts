export const langs = ["he", "en", "fr", "ru"] as const;
export type Lang = (typeof langs)[number];

export function isLang(value: string | undefined): value is Lang {
  return langs.includes(value as Lang);
}

export const langMeta: Record<Lang, { label: string; html: string; dir: "rtl" | "ltr" }> = {
  he: { label: "עב", html: "he", dir: "rtl" },
  en: { label: "EN", html: "en", dir: "ltr" },
  fr: { label: "FR", html: "fr", dir: "ltr" },
  ru: { label: "RU", html: "ru", dir: "ltr" },
};

type Dictionary = {
  metaTitle: string;
  metaDescription: string;
  nav: { building: string; residences: string; gallery: string; place: string; visit: string };
  inquire: string;
  close: string;
  menu: string;
  office: string;
  hero: { kicker: string; title: string; place: string; lead: string };
  facts: string[];
  story: { index: string; eyebrow: string; title: string; body: string[]; aside: string };
  offer: { eyebrow: string; title: string; body: string; price: string };
  audiencesTitle: string;
  audiences: { title: string; text: string }[];
  homes: { eyebrow: string; title: string; intro: string; plansNote: string; request: string };
  residences: { name: string; kind: string; text: string }[];
  gallery: { eyebrow: string; title: string; captions: string[]; open: string };
  place: { eyebrow: string; title: string; intro: string; points: { title: string; text: string }[] };
  standard: { eyebrow: string; title: string; items: string[] };
  visit: {
    eyebrow: string;
    title: string;
    body: string;
    agentsLabel: string;
    agents: { name: string; role: string }[];
    form: {
      name: string;
      phone: string;
      email: string;
      interest: string;
      interests: string[];
      message: string;
      submit: string;
      required: string;
      successTitle: string;
      successBody: string;
      again: string;
    };
  };
  footer: { rights: string; discreet: string; marketed: string };
};

export const copy: Record<Lang, Dictionary> = {
  he: {
    metaTitle: "הירקון · תל אביב — מור נכסים",
    metaDescription:
      "בניין בוטיק פרטי על רחוב הירקון בתל אביב. חמש דירות יוקרה, חדשות מקבלן, מוכנות לכניסה מיידית. נמכר כמקשה אחת. בשיווק מור נכסים.",
    nav: {
      building: "הבניין",
      residences: "הדירות",
      gallery: "גלריה",
      place: "המיקום",
      visit: "ביקור",
    },
    inquire: "תיאום ביקור",
    close: "סגירה",
    menu: "תפריט",
    office: "מור נכסים",
    hero: {
      kicker: "בשיווק מור נכסים",
      title: "הירקון",
      place: "תל אביב",
      lead: "בניין בוטיק פרטי על קו הים. חמש דירות יוקרה, חדשות מקבלן, שלא אוכלסו מעולם. הבניין נמכר כמקשה אחת, ומוכן לכניסה מיידית.",
    },
    facts: ["כניסה מיידית", "חדש מקבלן", "לא אוכלס", "חמש דירות", "נמכר בשלמות"],
    story: {
      index: "01",
      eyebrow: "הבניין",
      title: "בית אחד, בגובה של עיר שלמה.",
      body: [
        "על רחוב הירקון, במרחק הליכה מהים ומהטיילת, עומד בניין בוטיק שנבנה לרמת הגמר הגבוהה בארץ. לא דירה בתוך בניין משותף: חמישה בתי יוקרה תחת קורת גג אחת.",
        "דירת גן במפלס אחד, ומעליה ארבעה דופלקסים. בכל דופלקס שני מפלסים, קומת כניסה וקומה תחתונה. החדרים מרווחים, וכל חדר מתוכנן כסוויטת מאסטר. מתחת לבניין חניות תת־קרקעיות.",
      ],
      aside: "אין כאן המתנה לבנייה. המפתח זמין עכשיו.",
    },
    offer: {
      eyebrow: "ההצעה",
      title: "הבניין כולו. בעלים אחד.",
      body: "הירקון יוצא למכירה כמקשה אחת. מתאים למי שמחפש בית למשפחה גדולה, קומות למגורים וקומות להשכרה, נכס מניב לטווח ארוך, בית מלון בוטיק, או משכן שקט לשגרירות.",
      price: "המחיר נמסר בשיחה אישית.",
    },
    audiencesTitle: "למי הבניין מתאים",
    audiences: [
      { title: "משפחה גדולה", text: "לגור בכל הבניין, בפרטיות של בית פרטי ובמיקום של קו הים." },
      { title: "מגורים והשכרה", text: "לגור בקומות העליונות, ולהשכיר את הקומות התחתונות." },
      { title: "השקעה ארוכה", text: "להחזיק מבנה שלם להשכרה לטווח ארוך, בלי שכנים זרים." },
      { title: "מלונאות", text: "חמישה בתים מעוצבים, מוכנים, בלב תל אביב של המלונות והטיילת." },
      { title: "שגרירות", text: "בניין עצמאי, מרווח ושקט, קרוב לים ולמרכז העיר." },
    ],
    homes: {
      eyebrow: "02",
      title: "חמש דירות. לא יותר.",
      intro:
        "המספור מתחיל בדירת הגן, ואחריה דירות 1 עד 4. לדירת הגן תכנית אחת. לכל דופלקס שתי תכניות: קומת כניסה וקומה תחתונה. השטח והמרפסות נמדדים לכל מפלס בנפרד. מספר החדרים שייך לדירה כולה, לא לכל קומה.",
      plansNote: "סט התכניות נמסר בביקור פרטי. באתר אין כתובת מלאה ואין מפרט מספרי פומבי.",
      request: "בקשת תכניות",
    },
    residences: [
      {
        name: "דירת הגן",
        kind: "מפלס אחד",
        text: "פותחת את הבניין. בית במפלס יחיד, עם תכנית אחת, מופרד מהדופלקסים שמעליו.",
      },
      {
        name: "דירה 1",
        kind: "דופלקס",
        text: "שני מפלסים: קומת כניסה וקומה תחתונה. כל חדר הוא סוויטת מאסטר, והשטח נמדד לכל קומה בפני עצמה.",
      },
      {
        name: "דירה 2",
        kind: "דופלקס",
        text: "דופלקס מלא באותו היגיון: שתי תכניות, בית אחד. חללים מרווחים וגימור של קבלן, בלי דייר קודם.",
      },
      {
        name: "דירה 3",
        kind: "דופלקס · 9 חדרים",
        text: "תשעה חדרים לדירה כולה. המספר מופיע בשתי הקומות כי הוא מתאר את הבית, לא קומה כפולה.",
      },
      {
        name: "דירה 4",
        kind: "דופלקס",
        text: "הדופלקס העליון בסדרה. שני מפלסים, מרפסות, ואור של קומה גבוהה מעל העיר והים.",
      },
    ],
    gallery: {
      eyebrow: "03",
      title: "אור, אבן, וים.",
      open: "פתיחת תמונה",
      captions: [
        "סלון פתוח אל הים",
        "בריכה על המרפסת",
        "דק עץ מול האופק",
        "לובי העץ של הבניין",
        "מטבח באבן ובעץ",
        "מרפסת בין ערביים",
        "סלון בשיש מלא",
        "שכיבות מול הים",
        "שולחן על הדק",
        "סלון, טלוויזיה ונוף",
        "מים מול מגדלי העיר",
        "פינת ישיבה שקטה",
      ],
    },
    place: {
      eyebrow: "04",
      title: "הירקון. הים במרחק הליכה.",
      intro:
        "הרחוב הזה הוא קו המגע של תל אביב עם הים. טיילת, חוף, מלונות, מסעדות, והעיר כולה בצד השני של הדלת.",
      points: [
        { title: "הים", text: "הליכה קצרה לחוף ולטיילת. מהמרפסות רואים מים, לא רק עיר." },
        { title: "העיר", text: "מלונות, בתי קפה ומסעדות לאורך הרחוב. מרכז תל אביב בלי לחצות את העיר." },
        { title: "הפרטיות", text: "בניין שלם בידיים של בעלים אחד. לא קומה במגדל, לא שכנים של מישהו אחר." },
      ],
    },
    standard: {
      eyebrow: "הרמה",
      title: "נבנה לקצה העליון.",
      items: [
        "חדש מקבלן, לא אוכלס",
        "מוכן לכניסה מיידית",
        "כל חדר כסוויטת מאסטר",
        "חללים מרווחים וזיגוג רחב",
        "מרפסות דק מול הים והעיר",
        "בריכת מרפסת",
        "לובי מעוצב בעץ",
        "חניות תת־קרקעיות",
        "מטבחי עץ ואבן",
        "גמר באחוזון העליון בארץ",
      ],
    },
    visit: {
      eyebrow: "05",
      title: "ביקור פרטי, בתיאום.",
      body: "התכניות, המחיר והביקור נמסרים ישירות. פונים אל יצחק בן בסט או אל עוז אלהרר, ממור נכסים.",
      agentsLabel: "המשווקים",
      agents: [
        { name: "יצחק בן בסט", role: "מור נכסים" },
        { name: "עוז אלהרר", role: "מור נכסים" },
      ],
      form: {
        name: "שם",
        phone: "טלפון",
        email: "אימייל",
        interest: "נושא הפנייה",
        interests: ["רכישת הבניין", "תיאום ביקור", "קבלת תכניות"],
        message: "הודעה",
        submit: "שליחת פנייה",
        required: "שם וטלפון נדרשים כדי לחזור אליכם.",
        successTitle: "הפנייה נקלטה.",
        successBody: "יצחק או עוז יחזרו לתיאום שיחה וביקור פרטי.",
        again: "פנייה נוספת",
      },
    },
    footer: {
      rights: "הירקון, תל אביב",
      discreet: "הכתובת המלאה אינה מתפרסמת. הביקור בתיאום מראש בלבד.",
      marketed: "בשיווק",
    },
  },
  en: {
    metaTitle: "Hayarkon · Tel Aviv — More Properties",
    metaDescription:
      "A private boutique building on Hayarkon, Tel Aviv. Five luxury residences, new from the contractor, ready for immediate possession. Offered as one. Marketed by More Properties.",
    nav: {
      building: "The building",
      residences: "Residences",
      gallery: "Gallery",
      place: "The place",
      visit: "Visit",
    },
    inquire: "Arrange a visit",
    close: "Close",
    menu: "Menu",
    office: "More Properties",
    hero: {
      kicker: "Marketed by More Properties",
      title: "Hayarkon",
      place: "Tel Aviv",
      lead: "A private boutique building on the seafront. Five luxury residences, new from the contractor, never occupied. The building is offered as one, and it is ready now.",
    },
    facts: ["Immediate possession", "New from the contractor", "Never occupied", "Five residences", "Sold as one"],
    story: {
      index: "01",
      eyebrow: "The building",
      title: "One house, scaled to the city.",
      body: [
        "On Hayarkon, a short walk from the sea and the promenade, stands a boutique building finished to the highest standard in the country. This is not a flat inside a shared block. It is five private homes under one roof.",
        "A garden residence on a single level, and four duplexes above it. Each duplex has two levels: an entrance floor and a lower floor. Rooms are generous, and every room is planned as a master suite. Parking sits underground.",
      ],
      aside: "There is no wait for construction. The key is available now.",
    },
    offer: {
      eyebrow: "The offer",
      title: "The whole building. One owner.",
      body: "Hayarkon is offered as a single holding. It suits a large family, owners who live upstairs and lease below, a long-term rental estate, a boutique hotel, or a quiet embassy residence.",
      price: "The price is shared in a private conversation.",
    },
    audiencesTitle: "Who it is for",
    audiences: [
      { title: "A large family", text: "Live in the entire building, with the privacy of a house and a seafront address." },
      { title: "Live and lease", text: "Keep the upper floors, and rent the floors below." },
      { title: "A long hold", text: "Own a whole building for long-term rental, without outside neighbors." },
      { title: "Hospitality", text: "Five finished homes in the hotel and promenade district of Tel Aviv." },
      { title: "An embassy", text: "An independent, quiet building, close to the sea and the center." },
    ],
    homes: {
      eyebrow: "02",
      title: "Five residences. No more.",
      intro:
        "The set begins with the garden residence, then residences 1 to 4. The garden home has one plan. Each duplex has two: an entrance floor and a lower floor. Area and terraces are measured per level. The room count belongs to the whole residence, not to each floor.",
      plansNote: "The plan set is released at a private visit. The full street address and the measured schedule stay off the public page.",
      request: "Request the plans",
    },
    residences: [
      {
        name: "Garden residence",
        kind: "One level",
        text: "The building opens here. A single-level home, with one plan, set apart from the duplexes above.",
      },
      {
        name: "Residence 1",
        kind: "Duplex",
        text: "Two levels: entrance floor and lower floor. Every room is a master suite, and area is counted per floor.",
      },
      {
        name: "Residence 2",
        kind: "Duplex",
        text: "A full duplex on the same logic. Two plans, one home. Generous rooms, contractor-new, with no previous resident.",
      },
      {
        name: "Residence 3",
        kind: "Duplex · 9 rooms",
        text: "Nine rooms for the residence as a whole. The figure appears on both floors because it describes the home, not a doubled count.",
      },
      {
        name: "Residence 4",
        kind: "Duplex",
        text: "The upper duplex in the set. Two levels, terraces, and the light of a high floor over the city and the sea.",
      },
    ],
    gallery: {
      eyebrow: "03",
      title: "Light, stone, and sea.",
      open: "Open image",
      captions: [
        "Living room open to the sea",
        "Terrace pool",
        "Timber deck on the horizon",
        "The timber lobby",
        "Stone and timber kitchen",
        "Terrace at dusk",
        "A marble living room",
        "Loungers facing the sea",
        "A table on the deck",
        "Living room, screen, and view",
        "Water against the towers",
        "A quiet seating corner",
      ],
    },
    place: {
      eyebrow: "04",
      title: "Hayarkon. The sea is a walk away.",
      intro:
        "This street is where Tel Aviv meets the water. Promenade, beach, hotels, restaurants, and the city on the other side of the door.",
      points: [
        { title: "The sea", text: "A short walk to the beach and the promenade. From the terraces, the view is water, not only city." },
        { title: "The city", text: "Hotels, cafés and restaurants along the street. Central Tel Aviv, without crossing town." },
        { title: "The privacy", text: "A whole building in one owner’s hands. Not a floor in a tower, and not someone else’s neighbors." },
      ],
    },
    standard: {
      eyebrow: "The standard",
      title: "Built at the top of the market.",
      items: [
        "New from the contractor, never occupied",
        "Ready for immediate possession",
        "Every room planned as a master suite",
        "Generous rooms and wide glazing",
        "Timber terraces toward sea and city",
        "A terrace pool",
        "A sculpted timber lobby",
        "Underground parking",
        "Timber and stone kitchens",
        "Finish at the top percentile in the country",
      ],
    },
    visit: {
      eyebrow: "05",
      title: "A private visit, by arrangement.",
      body: "Plans, price and the visit are shared directly. Speak with Izack Ben Basat or Oz Elharar at More Properties.",
      agentsLabel: "The agents",
      agents: [
        { name: "Izack Ben Basat", role: "More Properties" },
        { name: "Oz Elharar", role: "More Properties" },
      ],
      form: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        interest: "Subject",
        interests: ["The whole building", "Arrange a visit", "Receive the plans"],
        message: "Message",
        submit: "Send the inquiry",
        required: "A name and a phone number are needed so we can return the call.",
        successTitle: "The inquiry is in.",
        successBody: "Izack or Oz will come back to arrange a call and a private visit.",
        again: "Another inquiry",
      },
    },
    footer: {
      rights: "Hayarkon, Tel Aviv",
      discreet: "The full address is not published. Visits are by prior arrangement only.",
      marketed: "Marketed by",
    },
  },
  fr: {
    metaTitle: "Hayarkon · Tel Aviv — More Properties",
    metaDescription:
      "Immeuble de boutique privé sur Hayarkon, à Tel Aviv. Cinq résidences de prestige, neuves promoteur, livrables immédiatement. Vendu d’un seul tenant. Commercialisé par More Properties.",
    nav: {
      building: "L’immeuble",
      residences: "Résidences",
      gallery: "Galerie",
      place: "Le lieu",
      visit: "Visite",
    },
    inquire: "Organiser une visite",
    close: "Fermer",
    menu: "Menu",
    office: "More Properties",
    hero: {
      kicker: "Commercialisé par More Properties",
      title: "Hayarkon",
      place: "Tel Aviv",
      lead: "Un immeuble de boutique privé face à la mer. Cinq résidences de prestige, neuves promoteur, jamais habitées. L’immeuble est proposé d’un seul tenant, et il est prêt.",
    },
    facts: ["Livraison immédiate", "Neuf promoteur", "Jamais habité", "Cinq résidences", "Vendu d’un seul tenant"],
    story: {
      index: "01",
      eyebrow: "L’immeuble",
      title: "Une maison, à l’échelle de la ville.",
      body: [
        "Sur Hayarkon, à quelques pas de la mer et de la promenade, un immeuble de boutique livré au plus haut niveau de finition du pays. Ce n’est pas un appartement dans une copropriété. Ce sont cinq maisons sous un seul toit.",
        "Une résidence de jardin sur un seul niveau, et quatre duplex au-dessus. Chaque duplex a deux niveaux : un étage d’entrée et un niveau inférieur. Les pièces sont vastes, et chacune est conçue comme une suite parentale. Le stationnement est en sous-sol.",
      ],
      aside: "Aucun délai de chantier. La clé est disponible maintenant.",
    },
    offer: {
      eyebrow: "L’offre",
      title: "Tout l’immeuble. Un seul propriétaire.",
      body: "Hayarkon est proposé d’un seul tenant. Il convient à une grande famille, à qui veut habiter en haut et louer en bas, à un patrimoine locatif de long terme, à une hôtellerie de boutique, ou à une résidence d’ambassade.",
      price: "Le prix se communique dans un entretien privé.",
    },
    audiencesTitle: "À qui il convient",
    audiences: [
      { title: "Une grande famille", text: "Habiter l’immeuble entier, avec l’intimité d’une maison et une adresse face à la mer." },
      { title: "Habiter et louer", text: "Garder les étages hauts, et louer les niveaux du dessous." },
      { title: "Un placement long", text: "Détenir un immeuble entier pour une location de longue durée, sans voisins extérieurs." },
      { title: "Hôtellerie", text: "Cinq maisons déjà livrées, au cœur des hôtels et de la promenade de Tel Aviv." },
      { title: "Une ambassade", text: "Un immeuble indépendant, calme et vaste, près de la mer et du centre." },
    ],
    homes: {
      eyebrow: "02",
      title: "Cinq résidences. Pas une de plus.",
      intro:
        "L’ensemble commence par la résidence de jardin, puis les résidences 1 à 4. Le jardin a un seul plan. Chaque duplex en a deux : étage d’entrée et niveau inférieur. La surface et les terrasses se mesurent par niveau. Le nombre de pièces concerne la résidence entière, pas chaque étage.",
      plansNote: "Le dossier de plans se remet lors d’une visite privée. L’adresse complète et le tableau chiffré restent hors de la page publique.",
      request: "Demander les plans",
    },
    residences: [
      {
        name: "Résidence jardin",
        kind: "Un niveau",
        text: "L’immeuble commence ici. Une maison de plain-pied, un seul plan, distincte des duplex du dessus.",
      },
      {
        name: "Résidence 1",
        kind: "Duplex",
        text: "Deux niveaux : étage d’entrée et niveau inférieur. Chaque pièce est une suite parentale, et la surface se compte par étage.",
      },
      {
        name: "Résidence 2",
        kind: "Duplex",
        text: "Un duplex complet, selon la même logique. Deux plans, une maison. Pièces vastes, neuf promoteur, sans occupant précédent.",
      },
      {
        name: "Résidence 3",
        kind: "Duplex · 9 pièces",
        text: "Neuf pièces pour la résidence entière. Le chiffre figure sur les deux niveaux parce qu’il décrit la maison, et non un compte doublé.",
      },
      {
        name: "Résidence 4",
        kind: "Duplex",
        text: "Le duplex haut de la série. Deux niveaux, des terrasses, et la lumière d’un étage élevé sur la ville et la mer.",
      },
    ],
    gallery: {
      eyebrow: "03",
      title: "Lumière, pierre, et mer.",
      open: "Ouvrir l’image",
      captions: [
        "Séjour ouvert sur la mer",
        "Piscine de terrasse",
        "Deck en bois face à l’horizon",
        "Le hall en bois",
        "Cuisine de pierre et de bois",
        "Terrasse au crépuscule",
        "Un séjour de marbre",
        "Transats face à la mer",
        "Une table sur le deck",
        "Séjour, écran et vue",
        "L’eau devant les tours",
        "Un coin calme",
      ],
    },
    place: {
      eyebrow: "04",
      title: "Hayarkon. La mer est à quelques pas.",
      intro:
        "Cette rue est le contact de Tel Aviv avec l’eau. Promenade, plage, hôtels, restaurants, et la ville de l’autre côté de la porte.",
      points: [
        { title: "La mer", text: "Une courte marche jusqu’à la plage et la promenade. Depuis les terrasses, on voit l’eau, pas seulement la ville." },
        { title: "La ville", text: "Hôtels, cafés et restaurants le long de la rue. Le centre de Tel Aviv, sans traverser la ville." },
        { title: "L’intimité", text: "Un immeuble entier entre les mains d’un seul propriétaire. Ni un étage de tour, ni les voisins de quelqu’un d’autre." },
      ],
    },
    standard: {
      eyebrow: "Le niveau",
      title: "Construit au sommet du marché.",
      items: [
        "Neuf promoteur, jamais habité",
        "Livrable immédiatement",
        "Chaque pièce conçue comme une suite",
        "Volumes généreux et larges baies",
        "Terrasses en bois vers la mer et la ville",
        "Une piscine de terrasse",
        "Un hall de bois sculpté",
        "Stationnement en sous-sol",
        "Cuisines de bois et de pierre",
        "Finitions dans le percentile le plus haut du pays",
      ],
    },
    visit: {
      eyebrow: "05",
      title: "Une visite privée, sur rendez-vous.",
      body: "Plans, prix et visite se transmettent directement. Écrivez à Izack Ben Basat ou à Oz Elharar, chez More Properties.",
      agentsLabel: "Les conseillers",
      agents: [
        { name: "Izack Ben Basat", role: "More Properties" },
        { name: "Oz Elharar", role: "More Properties" },
      ],
      form: {
        name: "Nom",
        phone: "Téléphone",
        email: "E-mail",
        interest: "Objet",
        interests: ["L’immeuble entier", "Organiser une visite", "Recevoir les plans"],
        message: "Message",
        submit: "Envoyer la demande",
        required: "Un nom et un téléphone sont nécessaires pour vous rappeler.",
        successTitle: "La demande est reçue.",
        successBody: "Izack ou Oz reviendront pour fixer un appel et une visite privée.",
        again: "Autre demande",
      },
    },
    footer: {
      rights: "Hayarkon, Tel Aviv",
      discreet: "L’adresse complète n’est pas publiée. Les visites se font uniquement sur rendez-vous.",
      marketed: "Commercialisé par",
    },
  },
  ru: {
    metaTitle: "Хаяркон · Тель-Авив — More Properties",
    metaDescription:
      "Частный бутик-дом на улице Хаяркон в Тель-Авиве. Пять резиденций, новые от застройщика, с немедленным заселением. Продаётся целиком. В продаже More Properties.",
    nav: {
      building: "Дом",
      residences: "Резиденции",
      gallery: "Галерея",
      place: "Место",
      visit: "Визит",
    },
    inquire: "Назначить визит",
    close: "Закрыть",
    menu: "Меню",
    office: "More Properties",
    hero: {
      kicker: "В продаже More Properties",
      title: "Хаяркон",
      place: "Тель-Авив",
      lead: "Частный бутик-дом у моря. Пять резиденций, новые от застройщика, в них никто не жил. Дом продаётся целиком и готов к немедленному заселению.",
    },
    facts: ["Заселение сразу", "Новый от застройщика", "Никто не жил", "Пять резиденций", "Продаётся целиком"],
    story: {
      index: "01",
      eyebrow: "Дом",
      title: "Один дом масштаба целого города.",
      body: [
        "На Хаяркон, в нескольких минутах от моря и променада, стоит бутик-дом с отделкой верхнего уровня в стране. Это не квартира в общем доме. Это пять частных домов под одной крышей.",
        "Садовая резиденция в одном уровне и четыре дуплекса над ней. У каждого дуплекса два уровня: входной этаж и нижний этаж. Комнаты просторные, и каждая задумана как мастер-сюит. Паркинг подземный.",
      ],
      aside: "Стройку ждать не нужно. Ключ доступен сейчас.",
    },
    offer: {
      eyebrow: "Предложение",
      title: "Весь дом. Один владелец.",
      body: "Хаяркон выходит на продажу целиком. Он подходит большой семье, тем, кто живёт наверху и сдаёт нижние этажи, долгосрочной аренде, бутик-отелю или тихой резиденции посольства.",
      price: "Цена называется в личном разговоре.",
    },
    audiencesTitle: "Кому подходит дом",
    audiences: [
      { title: "Большая семья", text: "Жить во всём доме: приватность частного дома и адрес у моря." },
      { title: "Жить и сдавать", text: "Оставить верхние этажи себе и сдавать нижние." },
      { title: "Долгий актив", text: "Владеть целым домом под долгосрочную аренду, без чужих соседей." },
      { title: "Гостиничный формат", text: "Пять готовых домов в районе отелей и променада Тель-Авива." },
      { title: "Посольство", text: "Отдельный, тихий и просторный дом рядом с морем и центром." },
    ],
    homes: {
      eyebrow: "02",
      title: "Пять резиденций. Не больше.",
      intro:
        "Нумерация начинается с садовой резиденции, затем резиденции 1–4. У садовой один план. У каждого дуплекса два: входной этаж и нижний этаж. Метраж и террасы считаются по каждому уровню. Число комнат относится ко всей резиденции, а не к каждому этажу.",
      plansNote: "Комплект планов передаётся на частном визите. Полный адрес и цифровая спецификация на сайте не публикуются.",
      request: "Запросить планы",
    },
    residences: [
      {
        name: "Садовая резиденция",
        kind: "Один уровень",
        text: "Дом начинается здесь. Жильё в одном уровне, с одним планом, отдельно от дуплексов выше.",
      },
      {
        name: "Резиденция 1",
        kind: "Дуплекс",
        text: "Два уровня: входной этаж и нижний. Каждая комната — мастер-сюит, площадь считается по этажам.",
      },
      {
        name: "Резиденция 2",
        kind: "Дуплекс",
        text: "Полный дуплекс по той же логике. Два плана, один дом. Простор, отделка от застройщика, без прежних жильцов.",
      },
      {
        name: "Резиденция 3",
        kind: "Дуплекс · 9 комнат",
        text: "Девять комнат на всю резиденцию. Цифра стоит на обоих этажах, потому что описывает дом, а не удваивает комнаты.",
      },
      {
        name: "Резиденция 4",
        kind: "Дуплекс",
        text: "Верхний дуплекс в ряду. Два уровня, террасы и свет высокого этажа над городом и морем.",
      },
    ],
    gallery: {
      eyebrow: "03",
      title: "Свет, камень и море.",
      open: "Открыть снимок",
      captions: [
        "Гостиная, открытая к морю",
        "Бассейн на террасе",
        "Деревянный дек к горизонту",
        "Деревянное лобби",
        "Кухня из камня и дерева",
        "Терраса к вечеру",
        "Гостиная в мраморе",
        "Шезлонги к морю",
        "Стол на деке",
        "Гостиная, экран и вид",
        "Вода на фоне башен",
        "Тихий угол",
      ],
    },
    place: {
      eyebrow: "04",
      title: "Хаяркон. Море в нескольких минутах.",
      intro:
        "Эта улица — линия, где Тель-Авив встречает воду. Променад, пляж, отели, рестораны и город по другую сторону двери.",
      points: [
        { title: "Море", text: "Короткая прогулка до пляжа и променада. С террас видно воду, а не только город." },
        { title: "Город", text: "Отели, кафе и рестораны вдоль улицы. Центр Тель-Авива без переезда через город." },
        { title: "Приватность", text: "Целый дом в одних руках. Не этаж в башне и не чужие соседи." },
      ],
    },
    standard: {
      eyebrow: "Уровень",
      title: "Построен на верхней планке рынка.",
      items: [
        "Новый от застройщика, никто не жил",
        "Готов к немедленному заселению",
        "Каждая комната — мастер-сюит",
        "Простор и широкое остекление",
        "Деревянные террасы к морю и городу",
        "Бассейн на террасе",
        "Лобби из скульптурного дерева",
        "Подземный паркинг",
        "Кухни из дерева и камня",
        "Отделка верхнего процентиля в стране",
      ],
    },
    visit: {
      eyebrow: "05",
      title: "Частный визит по записи.",
      body: "Планы, цена и визит передаются напрямую. Напишите Ицхаку Бен Басату или Озу Эльхарару, More Properties.",
      agentsLabel: "Агенты",
      agents: [
        { name: "Ицхак Бен Басат", role: "More Properties" },
        { name: "Оз Эльхарар", role: "More Properties" },
      ],
      form: {
        name: "Имя",
        phone: "Телефон",
        email: "Почта",
        interest: "Тема",
        interests: ["Весь дом", "Назначить визит", "Получить планы"],
        message: "Сообщение",
        submit: "Отправить запрос",
        required: "Нужны имя и телефон, чтобы мы могли перезвонить.",
        successTitle: "Запрос принят.",
        successBody: "Ицхак или Оз свяжутся, чтобы назначить звонок и частный визит.",
        again: "Ещё один запрос",
      },
    },
    footer: {
      rights: "Хаяркон, Тель-Авив",
      discreet: "Полный адрес не публикуется. Визит только по предварительной записи.",
      marketed: "В продаже",
    },
  },
};
