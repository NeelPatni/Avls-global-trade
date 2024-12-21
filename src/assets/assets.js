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
import RCMC from "./RCMC.png";
import APEDA from "./APEDA.png";
import FSSAI from "./FSSAI.png";

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
    id: "cumin-seeds",
    name: "Cumin Seeds (Cuminum cyminum)",
    img: Cumin_Seeds,
    use: "Cooking",
    selfLife: "12 to 24 months",
    color: "Brown",
    placeOfOrigin: "Rajasthan India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
    description:
      "Cumin Seeds, derived from the Cuminum cyminum plant, are small, aromatic seeds that impart a rich, earthy flavor to a wide variety of dishes. These brown seeds are commonly used in Indian, Middle Eastern, and Mediterranean cuisines, offering a distinct nutty and slightly peppery taste. Ground or used whole, cumin is a key ingredient in spice blends like garam masala and is often added to curries, stews, and rice dishes. Apart from its culinary uses, cumin also holds medicinal value, aiding in digestion, boosting immunity, and acting as an anti-inflammatory agent. The warm, fragrant aroma of cumin elevates the flavor profile of any dish, making it a must-have in any kitchen.",
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder (1%-2% Curcumin)",
    img: Turmeric_Powder,
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Yellow",
    placeOfOrigin: "Maharashtra India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "200gm, 500gm, 1Kg, and loose",
    description:
      "Turmeric Powder is a golden-hued spice that brings both vibrant color and health benefits to your dishes. Derived from the root of the Curcuma longa plant, this powder is widely used in Indian, Asian, and Middle Eastern cooking, especially for curries, soups, and rice dishes. The 1%-2% curcumin content in the powder is responsible for its anti-inflammatory and antioxidant properties. Turmeric not only adds an earthy, warm, and slightly bitter flavor to food but is also known for its potential to improve skin health, reduce inflammation, and aid in digestion. Used in both cooking and as a natural remedy, it is a staple in many households for its versatility and numerous health benefits.",
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    img: Black_Pepper,
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Black",
    placeOfOrigin: "India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
    description:
      "Black Pepper, often referred to as the 'King of Spices,' is one of the most commonly used spices worldwide. The dark, wrinkled seeds of the Piper nigrum plant add a sharp, pungent flavor that can elevate the taste of virtually any dish. Whether used whole, cracked, or freshly ground, black pepper brings boldness to everything from meats, soups, and sauces to vegetables and salads. It has a spicy kick that complements both savory and sweet dishes. In addition to its culinary appeal, black pepper has several medicinal uses, such as improving digestion, enhancing nutrient absorption, and supporting respiratory health. A must-have in kitchens around the world, black pepper is essential in spice blends and is often paired with salt for a timeless flavor combination.",
  },
  {
    id: "cardamom",
    name: "Cardamom (Elettaria cardamomum)",
    img: Cardamom,
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Green",
    placeOfOrigin: "Kerala India",
    form: "Pods",
    cultivationType: "Natural",
    packagingSize: "25gm, 50gm, 100gm, and loose",
    description:
      "Cardamom, known as the 'Queen of Spices,' is a fragrant and exotic spice native to the lush regions of Kerala, India. Its aromatic green pods contain small, black seeds that deliver a complex flavor profile, blending sweet, spicy, and citrusy notes. This spice is widely used in both savory and sweet dishes, such as curries, rice pilafs, desserts, and beverages like chai tea. The unique fragrance of cardamom enhances the sensory experience of any dish. Beyond its culinary uses, cardamom has been celebrated in traditional medicine for its digestive properties, ability to relieve respiratory issues, and overall health benefits. Cardamom can be used whole, or the seeds can be ground into a powder, making it a versatile addition to any spice collection.",
  },
  {
    id: "red-chillies",
    name: "Red Chillies",
    img: Chili_Powder,
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Red",
    placeOfOrigin: "Karnataka India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
    description:
      "Red Chillies are a fiery, vibrant spice that adds both heat and rich color to your meals. Originating from the Capsicum annuum plant, these dried red peppers are ground into powder and used to spice up a wide range of dishes, from curries and soups to stir-fries and marinades. Red chilli powder is known for its intense heat, but it also contributes a subtle smoky, slightly sweet flavor depending on the variety. Aside from its role in cooking, red chillies also have medicinal properties, particularly in boosting metabolism and supporting cardiovascular health. Whether you prefer mild or fiery heat, red chillies are essential for adding depth, spice, and color to your culinary creations.",
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

export const certificates = [
  {
    title: "RCMC Certification",
    image: RCMC,
    description: "Certificate of Registration as Exporter with APEDA.",
  },
  {
    title: "CE Certification",
    image: APEDA,
    description: "Compliance with European Union product safety standards.",
  },
  {
    title: "FSSAI Certification",
    image: FSSAI,
    description:
      "Approval from the Food Safety and Standards Authority of India.",
  },
];
