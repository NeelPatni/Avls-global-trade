import Logo from "./logo.png";
import About_Image from "./About_Image.jpg";
import Contact_Img from "./Contact_Img.jpg";
import slider_01 from "./slider_01.webp";
import slider_02 from "./slider_02.jpg";
import slider_03 from "./slider_03.jpg";
import slider_04 from "./slider_04.png";
import Cumin_Seeds from "./Cumin_Seeds.jpg";
import Turmeric_Powder from "./Turmeric_Powder.jpg";
import Black_Pepper from "./Black_Pepper.jpg";
import Cardamom from "./Cardamom.jpg";
import Chili_Powder from "./Chili_Powder.jpg";
// import Ginger_Powder from "./Ginger_Powder.jpg";
// import Coriander_Powder from "./Coriander_Powder.jpg";
// import Fennel_Seeds from "./Fennel_Seeds.jpg";
// import Cloves from "./Cloves.jpg";
// import Saffron from "./Saffron.jpg";
// import Mango_Alphonso from "./Mango_Alphonso.webp";
// import Pomegranate from "./Pomegranate.jpg";
// import Basmati_Rice from "./Basmati_Rice.jpg";
// import Fresh_Turmeric_Root from "./Fresh_Turmeric_Root.jpg";
// import Red_Onions from "./Red_Onions.jpg";
// import Chana_Dal from "./Chana_Dal.jpg";
// import Sweet_Potato from "./Sweet_Potato.jpg";
// import Cauliflower from "./Cauliflower.webp";

// certificates icons
import ISO_9001 from "./ISO_9001.jpeg";
import FSSAI_certificate from "./FSSAI_certificate.jpeg";
import Global_GAP from "./Global_GAP.jpeg";

// certificates images
import RCMC_PDF from "./RCMC_PDF.pdf";
import APEDA_PDF from "./APEDA_PDF.pdf";
import FSSAI_PDF from "./FSSAI_PDF.pdf";

export const assets = {
  Logo,
  About_Image,
  Contact_Img,
  FSSAI_certificate,
  ISO_9001,
  Global_GAP,
};

export const sliderImages = [slider_01, slider_02, slider_03, slider_04];

export const products = [
  {
    id: 1,
    name: "Cumin Seeds (Cuminum cyminum)",
    img: Cumin_Seeds,
    use: "Cooking",
    selfLife: "12 to 24 months",
    color: "Brown",
    placeOfOrigin: "Rajasthan India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
  },
  {
    id: 2,
    name: "Turmeric Powder (1%-2% Curcumin)",
    img: Turmeric_Powder,
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Yellow",
    placeOfOrigin: "Maharashtra India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "200gm, 500gm, 1Kg, and loose",
  },
  {
    id: 3,
    name: "Black Pepper",
    img: Black_Pepper,
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Black",
    placeOfOrigin: "India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
  },
  {
    id: 4,
    name: "Cardamom (Elettaria cardamomum)",
    img: Cardamom,
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Green",
    placeOfOrigin: "Kerala India",
    form: "Pods",
    cultivationType: "Natural",
    packagingSize: "25gm, 50gm, 100gm, and loose",
  },
  {
    id: 5,
    name: "Red Chillies",
    img: Chili_Powder,
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Red",
    placeOfOrigin: "Karnataka India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
  },
  // {
  //   id: 6,
  //   name: "Ginger Powder (5%-7% Gingerol)",
  //   img: Ginger_Powder,
  //   use: "Cooking, Medicinal",
  //   selfLife: "12 to 18 months",
  //   color: "Light Brown",
  //   placeOfOrigin: "Kerala India",
  //   form: "Powder",
  //   cultivationType: "Natural",
  //   packagingSize: "100gm, 250gm, 500gm, and loose",
  // },
  // {
  //   id: 7,
  //   name: "Coriander Powder (Coriandrum sativum)",
  //   img: Coriander_Powder,
  //   use: "Cooking",
  //   selfLife: "12 to 18 months",
  //   color: "Light Brown",
  //   placeOfOrigin: "Gujarat India",
  //   form: "Powder",
  //   cultivationType: "Natural",
  //   packagingSize: "50gm, 100gm, 250gm, and loose",
  // },
  // {
  //   id: 8,
  //   name: "Mustard Seeds (Brassica nigra)",
  //   img: Mustard_Seeds,
  //   use: "Cooking, Medicinal",
  //   selfLife: "12 to 18 months",
  //   color: "Yellow",
  //   placeOfOrigin: "Bihar India",
  //   form: "Seeds",
  //   cultivationType: "Natural",
  //   packagingSize: "50gm, 100gm, 250gm, and loose",
  // },
  // {
  //   id: 9,
  //   name: "Fennel Seeds (Foeniculum vulgare)",
  //   img: Fennel_Seeds,
  //   use: "Cooking, Medicinal",
  //   selfLife: "12 to 18 months",
  //   color: "Green",
  //   placeOfOrigin: "Rajasthan India",
  //   form: "Seeds",
  //   cultivationType: "Natural",
  //   packagingSize: "50gm, 100gm, 250gm, and loose",
  // },
  // {
  //   id: 10,
  //   name: "Cloves (Syzygium aromaticum)",
  //   img: Cloves,
  //   use: "Cooking, Medicinal",
  //   selfLife: "24 to 36 months",
  //   color: "Dark Brown",
  //   placeOfOrigin: "Tamil Nadu India",
  //   form: "Whole",
  //   cultivationType: "Natural",
  //   packagingSize: "25gm, 50gm, 100gm, and loose",
  // },
  // {
  //   id: 11,
  //   name: "Saffron (Crocus sativus)",
  //   img: Saffron,
  //   use: "Cooking, Medicinal",
  //   selfLife: "12 to 24 months",
  //   color: "Deep Red",
  //   placeOfOrigin: "Kashmir India",
  //   form: "Threads",
  //   cultivationType: "Natural",
  //   packagingSize: "1gm, 5gm, 10gm",
  // },
  // {
  //   id: 12,
  //   name: "Mango (Alphonso)",
  //   img: Mango_Alphonso,
  //   use: "Eating, Juices, Desserts",
  //   selfLife: "1 to 2 weeks (fresh)",
  //   color: "Golden Yellow",
  //   placeOfOrigin: "Maharashtra India",
  //   form: "Whole, Sliced",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, 2Kg, and loose",
  // },
  // {
  //   id: 13,
  //   name: "Pomegranate (Anar)",
  //   img: Pomegranate,
  //   use: "Eating, Juices, Salads",
  //   selfLife: "2 to 3 weeks",
  //   color: "Red",
  //   placeOfOrigin: "Rajasthan India",
  //   form: "Whole, Seeds",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, and loose",
  // },
  // {
  //   id: 14,
  //   name: "Basmati Rice",
  //   img: Basmati_Rice,
  //   use: "Cooking",
  //   selfLife: "12 to 24 months",
  //   color: "White, Brown",
  //   placeOfOrigin: "Punjab India",
  //   form: "Grains",
  //   cultivationType: "Natural",
  //   packagingSize: "1Kg, 5Kg, 10Kg, and loose",
  // },
  // {
  //   id: 15,
  //   name: "Brinjal (Eggplant)",
  //   img: Brinjal,
  //   use: "Cooking, Stir-Frying",
  //   selfLife: "7 to 10 days",
  //   color: "Purple",
  //   placeOfOrigin: "Uttar Pradesh India",
  //   form: "Whole",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, and loose",
  // },
  // {
  //   id: 16,
  //   name: "Turmeric Root (Fresh)",
  //   img: Fresh_Turmeric_Root,
  //   use: "Cooking, Medicinal",
  //   selfLife: "2 to 3 weeks (fresh)",
  //   color: "Orange",
  //   placeOfOrigin: "Kerala India",
  //   form: "Root",
  //   cultivationType: "Organic",
  //   packagingSize: "100gm, 250gm, 500gm, and loose",
  // },
  // {
  //   id: 17,
  //   name: "Lentils (Toor Dal)",
  //   img: Toor_Dal,
  //   use: "Cooking",
  //   selfLife: "12 to 18 months",
  //   color: "Yellow",
  //   placeOfOrigin: "Madhya Pradesh India",
  //   form: "Split",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, 2Kg, and loose",
  // },
  // {
  //   id: 18,
  //   name: "Red Onions",
  //   img: Red_Onions,
  //   use: "Cooking, Salads",
  //   selfLife: "3 to 4 weeks",
  //   color: "Red",
  //   placeOfOrigin: "Maharashtra India",
  //   form: "Whole",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, and loose",
  // },
  // {
  //   id: 19,
  //   name: "Coconut (Dry)",
  //   img: Dry_Coconut,
  //   use: "Cooking, Desserts",
  //   selfLife: "6 to 12 months",
  //   color: "Brown",
  //   placeOfOrigin: "Tamil Nadu India",
  //   form: "Whole, Shredded",
  //   cultivationType: "Natural",
  //   packagingSize: "100gm, 250gm, 500gm, and loose",
  // },
  // {
  //   id: 20,
  //   name: "Chana Dal (Split Chickpeas)",
  //   img: Chana_Dal,
  //   use: "Cooking",
  //   selfLife: "12 to 18 months",
  //   color: "Yellow",
  //   placeOfOrigin: "Rajasthan India",
  //   form: "Split",
  //   cultivationType: "Natural",
  //   packagingSize: "500gm, 1Kg, 2Kg, and loose",
  // },
  // {
  //   id: 21,
  //   name: "Sweet Potato",
  //   img: Sweet_Potato,
  //   use: "Cooking, Baking",
  //   selfLife: "2 to 3 weeks",
  //   color: "Orange",
  //   placeOfOrigin: "Punjab India",
  //   form: "Whole",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, and loose",
  // },
  // {
  //   id: 22,
  //   name: "Methi Seeds (Fenugreek Seeds)",
  //   img: Methi_Seeds,
  //   use: "Cooking, Medicinal",
  //   selfLife: "12 to 18 months",
  //   color: "Yellow-Brown",
  //   placeOfOrigin: "Gujarat India",
  //   form: "Seeds",
  //   cultivationType: "Natural",
  //   packagingSize: "50gm, 100gm, 250gm, and loose",
  // },
  // {
  //   id: 23,
  //   name: "Cauliflower",
  //   img: Cauliflower,
  //   use: "Cooking, Salads",
  //   selfLife: "7 to 10 days",
  //   color: "White",
  //   placeOfOrigin: "Haryana India",
  //   form: "Whole",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, and loose",
  // },
  // {
  //   id: 24,
  //   name: "Red Lentils (Masoor Dal)",
  //   img: Masoor_Dal,
  //   use: "Cooking",
  //   selfLife: "12 to 18 months",
  //   color: "Red",
  //   placeOfOrigin: "Uttar Pradesh India",
  //   form: "Split",
  //   cultivationType: "Organic",
  //   packagingSize: "500gm, 1Kg, 2Kg, and loose",
  // },
];

export const certificates = [RCMC_PDF, APEDA_PDF, FSSAI_PDF];
