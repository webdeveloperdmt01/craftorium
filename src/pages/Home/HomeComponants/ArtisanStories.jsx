import { useParams, useNavigate } from "react-router-dom";
import SilkDupatta from "@/assets/images/SilkDupatta.webp";
import { FaArrowLeft, FaClock, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import AtOne from "@/assets/images/artisans-1.webp";
import AtTwo from "@/assets/images/artisans-2.webp";
import AtThree from "@/assets/images/artisans-3.webp";

const artisanData = {
  1: {
    name: "Ananya Verma",
    bio: "Ananya has been preserving the art of hand block printing for over 15 years. She learned the craft from her mother in Jaipur and has since worked with natural dyes and traditional motifs, keeping this ancient art alive. Her dedication to eco-friendly methods has earned her recognition in sustainable fashion circles.",
    brief: "Specialist in eco-friendly hand block printing and natural dye textiles.",
    address: "Jaipur, Rajasthan",
    workingHours: "Mon - Sat, 9:00 AM - 6:00 PM",
    experience: "15+ Years",
    photos: [AtOne, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Handmade Scarf", "Printed Tablecloth", "Decorative Cushion"],
  },
  2: {
    name: "Aarav Sharma",
    bio: "Aarav is a master embroiderer from Kutch, known for his vibrant and intricate needlework. What started as a childhood curiosity soon turned into a lifelong passion. His work often depicts stories of local folklore, blending tradition with modern artistry.",
    brief: "Expert in Kutch embroidery and traditional folk designs.",
    address: "Kutch, Gujarat",
    workingHours: "Tue - Sun, 10:00 AM - 7:00 PM",
    experience: "12 Years",
    photos: [AtTwo, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Embroidered Bag", "Traditional Shawl", "Wall Hanging"],
  },
  3: {
    name: "Kavya Iyer",
    bio: "Kavya is a skilled silk weaver from Varanasi, carrying forward her family’s weaving traditions. Each piece she creates reflects patience, discipline, and the richness of Banarasi silk heritage. She trains young women in her community, empowering them through weaving.",
    brief: "Banarasi silk weaving artisan and community trainer.",
    address: "Varanasi, Uttar Pradesh",
    workingHours: "Mon - Sat, 8:00 AM - 5:00 PM",
    experience: "10 Years",
    photos: [AtThree, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Banarasi Saree", "Silk Dupatta", "Table Runner"],
  },
  4: {
    name: "Rohan Das",
    bio: "Rohan is a pottery artisan from West Bengal, specializing in terracotta crafts. His creations reflect the cultural vibrancy of Bengal, blending utility with artistic expression.",
    brief: "Terracotta and pottery artisan known for intricate clay designs.",
    address: "Bishnupur, West Bengal",
    workingHours: "Mon - Sat, 9:30 AM - 6:30 PM",
    experience: "18 Years",
    photos: [AtThree , SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Clay Vase", "Terracotta Plate", "Decorative Pot"],
  },
  5: {
    name: "Meera Nair",
    bio: "Meera is a traditional Kathakali mask painter from Kerala. Her detailed and colorful masks bring the stories of Kathakali dance to life and preserve a centuries-old heritage.",
    brief: "Kathakali mask painting specialist preserving Kerala’s tradition.",
    address: "Cochin, Kerala",
    workingHours: "Tue - Sun, 10:00 AM - 5:00 PM",
    experience: "20 Years",
    photos: [AtTwo, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Kathakali Mask", "Painted Canvas", "Wall Art"],
  },
  6: {
    name: "Devanshi Patel",
    bio: "Devanshi is an expert in bandhani tie-dye from Gujarat. Her vibrant patterns and designs have been showcased in fashion shows, combining traditional art with modern apparel.",
    brief: "Bandhani tie-dye specialist with contemporary touch.",
    address: "Ahmedabad, Gujarat",
    workingHours: "Mon - Sat, 9:00 AM - 7:00 PM",
    experience: "14 Years",
    photos: [AtTwo, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Tie-Dye Dupatta", "Bandhani Saree", "Stole"],
  },
  7: {
    name: "Vikram Singh",
    bio: "Vikram is a wood carving artisan from Rajasthan, crafting detailed jharokhas and furniture. His precision and artistry reflect centuries of royal craftsmanship.",
    brief: "Rajasthani wood carving master with architectural expertise.",
    address: "Jodhpur, Rajasthan",
    workingHours: "Mon - Sat, 8:30 AM - 6:00 PM",
    experience: "22 Years",
    photos: [AtOne, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Carved Chair", "Decorative Jharokha", "Wooden Panel"],
  },
  8: {
    name: "Sanya Kapoor",
    bio: "Sanya creates stunning meenakari jewelry from Jaipur. Her enamel designs showcase vibrant colors and intricate detailing, carrying forward royal traditions.",
    brief: "Meenakari jewelry artisan with a modern design sense.",
    address: "Jaipur, Rajasthan",
    workingHours: "Tue - Sun, 10:00 AM - 6:00 PM",
    experience: "11 Years",
    photos: [AtTwo , SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Meenakari Necklace", "Enamel Earrings", "Bracelet"],
  },
  9: {
    name: "Imran Ali",
    bio: "Imran is a zardozi embroidery artisan from Lucknow. His metallic threadwork has adorned garments for fashion houses and continues the Mughal-era craft.",
    brief: "Lucknowi zardozi embroidery specialist.",
    address: "Lucknow, Uttar Pradesh",
    workingHours: "Mon - Sat, 9:00 AM - 6:00 PM",
    experience: "16 Years",
    photos: [AtOne ,SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Embroidered Sherwani", "Decorative Cushion Cover", "Dupatta"],
  },
  10: {
    name: "Priya Menon",
    bio: "Priya is a coir craftswoman from Kerala. She designs eco-friendly home decor products using natural coir fiber, blending tradition with sustainability.",
    brief: "Eco-friendly coir artisan crafting sustainable decor.",
    address: "Alleppey, Kerala",
    workingHours: "Mon - Fri, 9:30 AM - 6:30 PM",
    experience: "9 Years",
    photos: [AtThree,  SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Coir Mat", "Handmade Basket", "Eco-Friendly Rug"],
  },
  11: {
    name: "Arjun Reddy",
    bio: "Arjun is a stone sculptor from Andhra Pradesh. His sculptures of deities and monuments reflect traditional temple architecture and modern aesthetics.",
    brief: "Stone carving artisan specializing in temple sculptures.",
    address: "Tirupati, Andhra Pradesh",
    workingHours: "Mon - Sat, 8:00 AM - 5:30 PM",
    experience: "25 Years",
    photos: [AtOne, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Stone Idol", "Carved Pillar", "Decorative Sculpture"],
  },
  12: {
    name: "Neha Gupta",
    bio: "Neha is a Madhubani painting artist from Bihar. Her vibrant paintings tell stories of mythology and nature, carrying forward a heritage passed through generations.",
    brief: "Madhubani painting specialist blending folk art with modern themes.",
    address: "Madhubani, Bihar",
    workingHours: "Mon - Fri, 10:00 AM - 6:00 PM",
    experience: "13 Years",
    photos: [AtTwo, SilkDupatta, SilkDupatta, SilkDupatta],
    products: ["Madhubani Painting", "Handmade Diary", "Canvas Wall Hanging"],
  },
};

export default function ArtisanStories() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = artisanData[parseInt(id)];

  if (!artisan) return <p className="p-10 text-center text-red-500">Artisan not found</p>;

  return (
    <section className="bg-[#fef6eb] px-4 md:px-8 lg:px-16 xl:px-24 py-16">
      <button
        onClick={() => navigate(-1)}
        className="font-cormorant mb-8 flex items-center gap-2 text-[var(--text-clr)] hover:text-[var(--text-hover-clr)] font-medium transition"
      >
        <FaArrowLeft className="text-2xl" /> Back to Artisans
      </button>
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <img
          src={artisan.photos[0]}
          alt={artisan.name}
          className="w-44 h-44 rounded-full border-4 border-[var(--text-hover-clr)] object-cover shadow-xl"
        />
        <div className="w-full lg:max-w-2xl">
          <h1 className="font-nexa text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-clr)]">
            {artisan.name}
          </h1>
          <p className="font-nexa text-gray-700 text-md md:text-lg mb-3">{artisan.brief}</p>
          <p className="font-nexa text-gray-600 text-sm md:text-base mb-4">{artisan.bio}</p>
          <div className="flex flex-col gap-2 text-gray-700 font-nexa">
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-[var(--text-hover-clr)]" /> {artisan.address}</p>
            <p className="flex items-center gap-2"><FaClock className="text-[var(--text-hover-clr)]" /> {artisan.workingHours}</p>
            <p className="flex items-center gap-2"><FaBriefcase className="text-[var(--text-hover-clr)]" /> {artisan.experience} Experience</p>
          </div>
        </div>
      </div>
      <h2 className="font-cormorant text-2xl font-semibold mb-6 text-gray-800">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {artisan.photos.slice(1).map((photo, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md transform transition hover:scale-105"
          >
            <img
              src={photo}
              alt={`${artisan.name} work ${i + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <h2 className="font-cormorant text-2xl font-bold mb-6 text-[var(--text-hover-clr)]">
        Products by {artisan.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artisan.products.map((product, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="font-nexa font-medium text-gray-700 text-center">
              {product}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
