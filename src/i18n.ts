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
  refCode?: string;
  nav: { building: string; residences: string; gallery: string; place: string; visit: string };
  inquire: string;
  parameters?: { title: string; value: string; desc: string }[];
  luxuryHighlights?: { title: string; desc: string }[];
  ui: {
    index: string;
    buildingLead: string;
    residencesLead: string;
    galleryLead: string;
    placeLead: string;
    visitLead: string;
    openHome: string;
    allHomes: string;
    continue: string;
  };
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
    metaTitle: "הירקון 68 · תל אביב — פרויקט בוטיק אקסקלוסיבי מול הים | מור נכסים",
    metaDescription:
      "הירקון 68, תל אביב: פרויקט בוטיק אקסקלוסיבי מול הים. בניין מגורים עצמאי הכולל חמש דירות יוקרה מרהיבות ופנטהאוז עוצר נשימה, חדשות מקבלן. שיווק בלעדי: מור נכסים.",
    refCode: "REF: 440 · TLV",
    nav: {
      building: "הפרויקט והאדריכלות",
      residences: "הדירות והפנטהאוז",
      gallery: "גלריית תמונות",
      place: "מיקום וסביבה",
      visit: "תיאום ביקור VIP",
    },
    inquire: "תיאום ביקור פרטי",
    parameters: [
      {
        title: "מגוון דירות יוקרה",
        value: "4 דירות + פנטהאוז",
        desc: "מ-175 מ\"ר עד 524 מ\"ר בתוספת מרפסות שמש פנורמיות",
      },
      {
        title: "מיקום נדיר",
        value: "הירקון 68, תל אביב",
        desc: "מרחק פסיעות ספורות מחוף גורדון, המרינה והטיילת",
      },
      {
        title: "סטטוס הפרויקט",
        value: "מוכן לכניסה מיידית",
        desc: "בניין חדש מקבלן, בסטנדרט בינלאומי — לא אוכלס מעולם",
      },
      {
        title: "הצעה מסחרית",
        value: "החל מ-₪24,500,000",
        desc: "אפשרות לרכישת דירות נבחרות או הבניין כולו כמקשה אחת",
      },
    ],
    luxuryHighlights: [
      {
        title: "קו ראשון למרחבי הים",
        desc: "מפתחי ענק וקירות מסך זכוכית המכניסים את האופק הכחול, הבריזה והשקיעות המרהיבות ישירות לחללי המגורים.",
      },
      {
        title: "בריכת שחייה ודק טיק פרטי",
        desc: "מרפסות שמש רחבות ידיים בעיצוב מוקפד, הכוללות בריכת שכשוך פרטית הפונה לים ולאוריינטציה המושלמת.",
      },
      {
        title: "חניון תת־קרקעי ומעלית ישירה",
        desc: "חניות פרטיות בחניון תת-קרקעי שמור, מעלית מתקדמת עם גישה פרטית ישירה ולובי מפואר בחיפוי עץ אלון ושיש איטלקי.",
      },
      {
        title: "מערכות אקלימיות ובית חכם",
        desc: "מיזוג אוויר מתקדם מסוג VRF, שליטה חכמה על תאורה, הצללה וסאונד, ובידוד תרמי ואקוסטי מהמעלה הראשונה.",
      },
    ],
    ui: {
      index: "תוכן הפרויקט",
      buildingLead: "חמישה בתי יוקרה פרטיים תחת קורת גג אחת מול הים, מוכנים לכניסה מיידית.",
      residencesLead: "דירת גן מפוארת וארבעה דופלקסים מרהיבים. לכל בית חללים ייחודיים ומפרט פרימיום.",
      galleryLead: "אבן טבעית, עץ טיק, שיש יוקרתי וים. מראות אמיתיים מתוך הנכס.",
      placeLead: "רצועת החוף המבוקשת ביותר בישראל. מרחק נגיעה מקו המים וממוקדי הקולינריה של העיר.",
      visitLead: "חוברת הפרויקט, תוכניות אדריכליות ומחיר נמסרים בפנייה ישירה ודיסקרטית.",
      openHome: "לצפייה בפרטי הדירה",
      allHomes: "לכל הדירות בפרויקט",
      continue: "העמוד הבא",
    },
    close: "סגירה",
    menu: "תפריט",
    office: "מור נכסים — Real Estate of Distinction",
    hero: {
      kicker: "שיווק בלעדי · מור נכסים | BOUTIQUE RESIDENCES",
      title: "הירקון 68",
      place: "תל אביב-יפו · קו ראשון לרצועת החוף",
      lead: "פרויקט בוטיק אקסקלוסיבי מול הים. בניין מגורים עצמאי המציע ארבע דירות יוקרה מרהיבות ופנטהאוז עוצר נשימה — חדשות מקבלן, בסטנדרט בינלאומי גבוה, מוכנות לכניסה מיידית ומוצעות כמקשה אחת או כדירות נבחרות.",
    },
    facts: [
      "הירקון 68, תל אביב",
      "קו ראשון לים",
      "חדש מקבלן · לא אוכלס",
      "4 דירות + פנטהאוז",
      "מרפסות דק ובריכה",
      "אכלוס מיידי",
    ],
    story: {
      index: "01",
      eyebrow: "הפרויקט והאדריכלות",
      title: "יצירת מופת אדריכלית על קו המים של תל אביב",
      body: [
        "כשמדברים על מיקום מושלם, רחוב הירקון בתל אביב הוא דוגמה מובהקת לכך. לא פלא שאחד המוקדים הבולטים והיוקרתיים ביותר של תל אביב הפך לכתובת הנחשקת ביותר בקרב מחפשי מגורים אקסקלוסיביים במרחק נגיעה מחוף הים, הטיילת, ומוקדי התרבות והקולינריה של העיר ללא הפסקה.",
        "בלב רחוב זה, במרחק פסיעות ספורות מחוף גורדון המפורסם, הוקם פרויקט יוקרתי – בניין בוטיק בעיצוב אדריכלי מושקע ומוקפד עד הפרט האחרון. הבניין מציע ארבע דירות מפוארות מ-175 מ\"ר עד 385 מ\"ר עם מרפסות שמש גדולות, ופנטהאוז מרהיב המתפרש על כ-524 מ\"ר בטוטאל עם בריכת שכשוך פרטית מול האופק.",
        "כל דירה בפרויקט מתאפיינת בעיצוב חכם, מפרט עשיר, ורמות גמר תחת סטנדרטים בינלאומיים מחמירים, וזאת מבלי לוותר על תחושת חמימות, אינטימיות ורוגע ביתי. חוויית המגורים כוללת לובי כניסה ייצוגי ומפואר, חניון תת-קרקעי פרטי עם חניה לכל דירה, מעלית מתקדמת ומערכות בית חכם.",
      ],
      aside: "בניין עצמאי מוכן לאכלוס מיידי. אין צורך בהמתנה לבנייה — המפתח זמין למסירה.",
    },
    offer: {
      eyebrow: "ההזדמנות",
      title: "הבניין כולו — בעלות אחת — פרטיות מוחלטת",
      body: "הירקון 68 יוצא למכירה כמקשה אחת, עם אפשרות לרכישת דירות נבחרות. הנכס מתאים באופן אידיאלי לאחוזת מגורים משפחתית רחבת ידיים, שילוב של מגורים יוקרתיים בקומות העליונות והשכרה מניבה בקומות התחתונות, נכס השקעה יוקרתי לטווח ארוך, מלון בוטיק אקסקלוסיבי, או משכן דיפלומטי ייצוגי במיקום האייקוני ביותר בתל אביב.",
      price: "החל מ-₪24,500,000 ועד מכירת הבניין כולו. פרטים מסחריים נמסרים בשיחה אישית.",
    },
    audiencesTitle: "למי הנכס מתאים במיוחד",
    audiences: [
      {
        title: "אחוזת מגורים משפחתית (Family Compound)",
        text: "לגור בכל הבניין בפרטיות אבסולוטית של בית פרטי, עם אינטימיות מלאה ובמיקום המוביל של קו הים.",
      },
      {
        title: "מגורי יוקרה בשילוב השכרה מניבה",
        text: "החזקה בקומות העליונות ובפנטהאוז למגורים פרטיים, והשכרת היחידות הנוספות כדירות יוקרה מניבות.",
      },
      {
        title: "השקעה אסטרטגית לטווח ארוך",
        text: "החזקת מבנה שלם ועצמאי בבעלות יחידה על רחוב הירקון, ללא תלות בוועדי בתים או שותפים זרים.",
      },
      {
        title: "מלונאות בוטיק ואירוח עילית",
        text: "חמישה בתי יוקרה עצמאיים ומוכנים, בלב ליבה של סצנת המלונות, החופים והתיירות הבינלאומית של תל אביב.",
      },
      {
        title: "משכן דיפלומטי או שגרירות",
        text: "בניין עצמאי, מאובטח ושקט, המעניק ייצוגיות בלתי מתפשרת לצד נגישות מיידית למרכז העסקים והשגרירויות.",
      },
    ],
    homes: {
      eyebrow: "02",
      title: "קולקציית המגורים · 5 בתי יוקרה",
      intro:
        "הפרויקט כולל דירת גן יוקרתית וארבעה דופלקסים מרהיבים, המציעים תכנון אדריכלי פתוח, סוויטות מאסטר מרווחות, מרפסות שמש נדיבות ורמת גימור ללא פשרות. כל דירה נמדדת ביסודיות עם חלוקה אופטימלית בין חללי אירוח למתחמי שינה.",
      plansNote: "חוברת תוכניות אדריכליות מפורטות ומפרט טכני מלא נמסרים בתיאום ביקור פרטי.",
      request: "לבקשת תוכניות ומפרט",
    },
    residences: [
      {
        name: "דירת גן אקסקלוסיבית",
        kind: "מפלס יחיד · מרפסת וגינה פרטית",
        text: "פותחת את קולקציית הבניין. דירת גן מרהיבה במפלס יחיד המשלבת תחושת וילה פרטית עם מפתחי ענק שטופי אור, חלל אירוח פתוח, מטבח שף יוקרתי ופרטיות מושלמת.",
      },
      {
        name: "דופלקס אלגנטי 01",
        kind: "דופלקס פרימיום · 2 מפלסים",
        text: "שני מפלסים מתוכננים לעילא: קומת כניסה מרווחת לאירוח ויציאה למרפסת, וקומה תחתונה שקטה ואינטימית. כל חדר מתוכנן כסוויטת מאסטר פרטית עם חדר רחצה צמוד בחיפוי שיש.",
      },
      {
        name: "דופלקס יוקרתי 02",
        kind: "דופלקס פרימיום · נוף פתוח לים",
        text: "תכנון מוקפד באותו היגיון מנצח: שתי תוכניות, בית אחד שלם ומרווח. חלונות ענק מרצפה עד תקרה, בריזת ים נעימה, וגימור חדש מקבלן ברמה הגבוהה ביותר בישראל.",
      },
      {
        name: "דופלקס מרווח 03",
        kind: "דופלקס מלכותי · 9 חדרים",
        text: "תשעה חדרים הפרוסים על פני שני מפלסים עצמאיים. שילוב נדיר בין מרחבי מחיה נדיבים, גמישות חלוקה מותאמת אישית, מרפסות שמש וזרימת אור טבעי לאורך כל שעות היום.",
      },
      {
        name: "פנטהאוז דופלקס 04",
        kind: "פנטהאוז מלכותי · בריכה פרטית מול הים",
        text: "פסגת היוקרה של הפרויקט. פנטהאוז דופלקס מרהיב המתנשא מעל קו החוף, עם מרפסת גג פנורמית, דק טיק טבעי, בריכת שכשוך פרטית ונוף שקיעה מהפנט שאין שני לו בתל אביב.",
      },
    ],
    gallery: {
      eyebrow: "03",
      title: "אור, אבן, שיש וים",
      open: "פתיחת תמונה להגדלה",
      captions: [
        "חלל אירוח פתוח מול הים התיכון",
        "בריכת שכשוך פרטית על מרפסת הגג",
        "דק טיק טבעי מול קו האופק",
        "לובי כניסה מפואר בחיפוי עץ אלון",
        "מטבח יוקרתי באבן טבעית ועץ",
        "מרפסת שמש פנורמית בשעות בין ערביים",
        "סלון מרווח בריצוף שיש איטלקי",
        "שלווה מול הים בקו ראשון לחוף",
        "פינת אוכל ואירוח על הדק",
        "סלון אלגנטי עם מפתחי ענק",
        "נוף פנורמי מרהיב בין העיר לים",
        "פינת ישיבה אינטימית ושקטה",
      ],
    },
    place: {
      eyebrow: "04",
      title: "הירקון 68 — במרחק פסיעות מהמים",
      intro:
        "רחוב הירקון הוא קו המפגש האולטימטיבי של תל אביב עם הים. טיילת אינסופית, חוף גורדון, מלונות יוקרה בינלאומיים, מסעדות שף עיליות, והעיר כולה הפועמת ממש מעבר לדלת.",
      points: [
        {
          title: "קו ראשון לחוף גורדון ולטיילת",
          text: "מרחק הליכה קצר של דקות ספורות מחוף גורדון והמרינה. מכל קומה ומכל מרפסת נשקף מרחב כחול פתוח ונוף פנורמי בלתי נשכח.",
        },
        {
          title: "לב העיר והקולינריה המובילה",
          text: "שדרות בן גוריון, רחוב דיזנגוף, בתי קפה איכותיים, מסעדות גורמה ומוסדות התרבות של תל אביב — הכל במרחק פסיעות, ללא צורך ברכב.",
        },
        {
          title: "פרטיות מוחלטת בבניין עצמאי",
          text: "בניין בוטיק שלם בשליטת בעלים יחיד. ללא המוניות של מגדל מגורים, עם כניסה נפרדת, מעלית פרטית וחניון תת-קרקעי שמור.",
        },
      ],
    },
    standard: {
      eyebrow: "מפרט ואיכות",
      title: "נבנה בסטנדרט בינלאומי ללא פשרות",
      items: [
        "חדש מקבלן — לא אוכלס מעולם (Move-in Ready)",
        "קו ראשון לים — במרחק פסיעות מחוף גורדון והטיילת",
        "סוויטות מאסטר מפנקות עם חדרי רחצה בשיש איטלקי",
        "מפתחי ענק וזיגוג אקוסטי כפול מבודד רעש וקרינה",
        "מרפסות שמש פנורמיות עם דק עץ טיק טבעי ובריכת שכשוך",
        "לובי כניסה ייצוגי בעיצוב אדריכלי של עץ ושיש",
        "חניון תת־קרקעי פרטי עם עמדות טעינה לרכבים חשמליים",
        "מערכות מיזוג אוויר מתקדמות VRF ושליטת בית חכם",
        "מטבחי פרימיום בעיצוב יוקרתי ואבזור מובנה מוביל",
        "אבטחה, קונסיירז' ואינטימיות מוחלטת בבניין בוטיק עצמאי",
      ],
    },
    visit: {
      eyebrow: "05",
      title: "תיאום ביקור פרטי ודיסקרטי",
      body: "חוברת הפרויקט המלאה, תוכניות אדריכליות ופרטים מסחריים נמסרים בשיחה ישירה ובדיסקרטיות מלאה. פנו אל נציגי השיווק הבלעדי של מור נכסים.",
      agentsLabel: "נציגי השיווק הבלעדי",
      agents: [
        { name: "יצחק בן בסט", role: "מור נכסים · מנהל שיווק פרויקטים" },
        { name: "עוז אלהרר", role: "מור נכסים · יועץ נדל\"ן בכיר" },
      ],
      form: {
        name: "שם מלא",
        phone: "מספר טלפון",
        email: "כתובת דוא\"ל",
        interest: "נושא הפנייה",
        interests: [
          "רכישת הבניין כולו כמקשה אחת",
          "תיאום ביקור VIP בנכס",
          "קבלת חוברת תוכניות ומפרט טכני",
          "רכישת דירה בודדת נבחרת בפרויקט",
        ],
        message: "הודעה / פרטים נוספים",
        submit: "שליחת פנייה לצוות מור נכסים",
        required: "נא להזין שם וטלפון תקינים לצורך חזרה דיסקרטית.",
        successTitle: "פנייתך התקבלה בהצלחה",
        successBody: "יצחק או עוז יצרו עמך קשר אישי ודיסקרטי לתיאום פגישה וסיור פרטי.",
        again: "שליחת פנייה נוספת",
      },
    },
    footer: {
      rights: "הירקון 68, תל אביב-יפו",
      discreet: "הכתובת המלאה והתוכניות נמסרות בפגישה אישית. הביקור בתיאום מראש בלבד ובדיסקרטיות מלאה.",
      marketed: "שיווק בלעדי",
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
    ui: {
      index: "The house",
      buildingLead: "Five private homes under one roof, ready to enter.",
      residencesLead: "A garden residence and four duplexes. Each home has its own page.",
      galleryLead: "Stone, timber, and the sea. Photographs of the building itself.",
      placeLead: "The sea is a short walk away. The full address stays off the site.",
      visitLead: "Plans, price, and the visit are shared in a direct conversation.",
      openHome: "Open the residence",
      allHomes: "All residences",
      continue: "Next page",
    },
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
      title: "One house, scaled to the city",
      body: [
        "On Hayarkon, a short walk from the sea and the promenade, stands a boutique building finished to the highest standard in the country. This is not a flat inside a shared block. It is five private homes under one roof.",
        "A garden residence on a single level, and four duplexes above it. Each duplex has two levels: an entrance floor and a lower floor. Rooms are generous, and every room is planned as a master suite. Parking sits underground.",
      ],
      aside: "There is no wait for construction. The key is available now.",
    },
    offer: {
      eyebrow: "The offer",
      title: "The whole building — One owner",
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
      title: "Five residences — No more",
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
      title: "Light, stone, and sea",
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
      title: "Hayarkon — The sea is a walk away",
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
      title: "Built at the top of the market",
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
      title: "A private visit, by arrangement",
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
        successTitle: "The inquiry is in",
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
    ui: {
      index: "La maison",
      buildingLead: "Cinq maisons privées sous un seul toit, prêtes à être occupées.",
      residencesLead: "Une résidence jardin et quatre duplex. Chaque maison a sa page.",
      galleryLead: "Pierre, bois, et mer. Les photographies de l’immeuble.",
      placeLead: "La mer est à quelques pas. L’adresse complète reste hors du site.",
      visitLead: "Plans, prix et visite se transmettent dans un entretien direct.",
      openHome: "Ouvrir la résidence",
      allHomes: "Toutes les résidences",
      continue: "Page suivante",
    },
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
      title: "Une maison, à l’échelle de la ville",
      body: [
        "Sur Hayarkon, à quelques pas de la mer et de la promenade, un immeuble de boutique livré au plus haut niveau de finition du pays. Ce n’est pas un appartement dans une copropriété. Ce sont cinq maisons sous un seul toit.",
        "Une résidence de jardin sur un seul niveau, et quatre duplex au-dessus. Chaque duplex a deux niveaux : un étage d’entrée et un niveau inférieur. Les pièces sont vastes, et chacune est conçue comme une suite parentale. Le stationnement est en sous-sol.",
      ],
      aside: "Aucun délai de chantier. La clé est disponible maintenant.",
    },
    offer: {
      eyebrow: "L’offre",
      title: "Tout l’immeuble — Un seul propriétaire",
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
      title: "Cinq résidences — Pas une de plus",
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
      title: "Lumière, pierre, et mer",
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
      title: "Hayarkon — La mer est à quelques pas",
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
      title: "Construit au sommet du marché",
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
      title: "Une visite privée, sur rendez-vous",
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
        successTitle: "La demande est reçue",
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
    ui: {
      index: "Дом",
      buildingLead: "Пять частных домов под одной крышей, готовых к заселению.",
      residencesLead: "Садовая резиденция и четыре дуплекса. У каждого дома своя страница.",
      galleryLead: "Камень, дерево и море. Фотографии самого здания.",
      placeLead: "Море в нескольких минутах. Полный адрес на сайте не публикуется.",
      visitLead: "Планы, цена и визит передаются в прямом разговоре.",
      openHome: "Открыть резиденцию",
      allHomes: "Все резиденции",
      continue: "Следующая страница",
    },
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
      title: "Один дом масштаба целого города",
      body: [
        "На Хаяркон, в нескольких минутах от моря и променада, стоит бутик-дом с отделкой верхнего уровня в стране. Это не квартира в общем доме. Это пять частных домов под одной крышей.",
        "Садовая резиденция в одном уровне и четыре дуплекса над ней. У каждого дуплекса два уровня: входной этаж и нижний этаж. Комнаты просторные, и каждая задумана как мастер-сюит. Паркинг подземный.",
      ],
      aside: "Стройку ждать не нужно. Ключ доступен сейчас.",
    },
    offer: {
      eyebrow: "Предложение",
      title: "Весь дом — Один владелец",
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
      title: "Пять резиденций — Не больше",
      intro:
        "Нумерация начинается с садовой резиденции, затем резиденции 1–4. У садовой один план. У каждого дуплекса два: входной этаж и нижний этаж. Метраж и террасы считаются по каждому уровню. Число комнат относится ко всей резиденции, а не к каждому этажу.",
      plansNote: "Комплект планов передаётся на частном визите. Полный адрес и цифровая спецификация на сайте не публикуются.",
      request: "Запросить планы",
    },
    residences: [
      {
        name: "Садовая резиденция",
        kind: "Один уровень",
        text: "Дом начинается здесь. Жильё в одном уровне, с одним planом, отдельно от дуплексов выше.",
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
      title: "Свет, камень и море",
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
      title: "Хаяркон — Море в нескольких минутах",
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
      title: "Построен на верхней планке рынка",
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
      title: "Частный визит по записи",
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
        successTitle: "Запрос принят",
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
