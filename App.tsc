import { motion } from "motion/react";
import { MapPin, Phone, Clock, Facebook, Instagram, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { getRestaurantData, type RestaurantData } from "./services/restaurantService";
import { cn } from "./lib/utils";

export default function App() {
  const [data, setData] = useState<RestaurantData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getRestaurantData();
        // Override with user-provided correct info
        setData({
          ...result,
          address: "391 Bd Henri Bourassa O, Montréal, QC H3L 1P2, Canada",
          phone: "514-419-3922"
        });
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        // Fallback data if API fails
        setData({
          name: "L'Oeuforie Matinale",
          address: "391 Bd Henri Bourassa O, Montréal, QC H3L 1P2, Canada",
          phone: "514-419-3922",
          hours: [
            { day: "Lundi - Vendredi", hours: "6:00 - 15:00" },
            { day: "Samedi - Dimanche", hours: "7:00 - 15:00" }
          ],
          menu: [
            {
              category: "Déjeuners Classiques",
              items: [
                { name: "L'Oeuforie Spécial", description: "2 oeufs, choix de viande, patates, rôties et café.", price: "$12.95" },
                { name: "Omelette Western", description: "Jambon, oignons, poivrons et fromage.", price: "$14.50" },
                { name: "Bénédictine Classique", description: "2 oeufs pochés sur jambon et muffin anglais, sauce hollandaise.", price: "$15.95" }
              ]
            },
            {
              category: "Sucré et Salé",
              items: [
                { name: "Crêpes aux Fruits", description: "Crêpes fines servies avec fruits frais et crème pâtissière.", price: "$13.95" },
                { name: "Pain Doré Brioché", description: "Tranches épaisses de brioche, sirop d'érable et petits fruits.", price: "$14.95" },
                { name: "Gaufre Belge", description: "Gaufre croustillante avec fraises et crème fouettée.", price: "$13.50" }
              ]
            },
            {
              category: "Dîners",
              items: [
                { name: "Club Sandwich", description: "Poulet grillé, bacon, laitue, tomates et frites.", price: "$16.95" },
                { name: "Burger L'Oeuforie", description: "Bœuf Angus, fromage cheddar, oignons caramélisés.", price: "$17.50" },
                { name: "Salade César au Poulet", description: "Laitue romaine, poulet grillé, croûtons et parmesan.", price: "$15.95" }
              ]
            }
          ],
          description: "Bienvenue à L'Oeuforie Matinale, votre destination préférée pour un déjeuner savoureux et un dîner réconfortant au cœur de Montréal. Nous sommes fiers de servir des plats frais, préparés avec amour, dans une ambiance chaleureuse et familiale."
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f5f5f0]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#5A5A40] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-serif text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-[#5A5A40]">
            L'OEUFORIE <span className="italic font-light">matinale</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm uppercase letter-spacing-wider font-medium">
            <a href="#hero" className="hover:text-[#5A5A40] transition-colors">Accueil</a>
            <a href="#menu" className="hover:text-[#5A5A40] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#5A5A40] transition-colors">À Propos</a>
            <a href="#contact" className="hover:text-[#5A5A40] transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#f5f5f0] border-b border-black/5 px-6 py-8 flex flex-col gap-6 text-center uppercase text-sm font-medium"
          >
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>À Propos</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/breakfast/1920/1080" 
            alt="Breakfast background"
            className="w-full h-full object-cover opacity-20 grayscale-[0.5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f0]/50 to-[#f5f5f0]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-light tracking-tighter mb-6"
          >
            L'Oeuforie <span className="italic font-normal text-[#5A5A40]">Matinale</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#1a1a1a]/70 font-light mb-10 leading-relaxed"
          >
            Le goût du matin, servi avec passion à Montréal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#menu" 
              className="bg-[#5A5A40] text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#4a4a35] transition-all shadow-lg shadow-[#5A5A40]/20"
            >
              Découvrir le Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/restaurant/800/1000" 
                alt="Restaurant interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Une tradition de <span className="italic text-[#5A5A40]">fraîcheur</span> et de convivialité.
            </h2>
            <p className="text-lg text-[#1a1a1a]/70 leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#5A5A40] font-bold mb-2">Localisation</h4>
                <p className="text-[#1a1a1a]/60">{data.address}</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#5A5A40] font-bold mb-2">Contact</h4>
                <p className="text-[#1a1a1a]/60">{data.phone}</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=391+Bd+Henri+Bourassa+O,+Montréal,+QC+H3L+1P2,+Canada" 
                  target="_blank"
                  className="bg-[#5A5A40] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#4a4a35] transition-all inline-flex items-center gap-2"
                >
                  <MapPin size={14} /> Voir sur la carte
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-4">Notre <span className="italic text-[#5A5A40]">Menu</span></h2>
            <div className="w-24 h-px bg-[#5A5A40] mx-auto" />
          </div>

          <div className="space-y-20">
            {data.menu.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl uppercase tracking-[0.2em] text-[#5A5A40] font-medium mb-10 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-medium group-hover:text-[#5A5A40] transition-colors">{item.name}</h4>
                        <div className="flex-1 border-b border-dotted border-black/10 mx-4" />
                        <span className="font-medium text-[#5A5A40]">{item.price}</span>
                      </div>
                      <p className="text-[#1a1a1a]/50 text-sm italic">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="contact" className="py-24 px-6 bg-[#1a1a19] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-light italic">L'Oeuforie Matinale</h3>
            <p className="text-white/50 leading-relaxed">
              Déjeuner et dîner servis avec le sourire. Venez nous voir pour une expérience culinaire inoubliable.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/restaurantloeuforiematinale/" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white/40">Heures d'ouverture</h4>
            <div className="space-y-4">
              {data.hours.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/70">{h.day}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white/40">Nous trouver</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-[#5A5A40] shrink-0" />
                <p className="text-white/70">{data.address}</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#5A5A40] shrink-0" />
                <p className="text-white/70">{data.phone}</p>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#5A5A40] shrink-0" />
                <p className="text-white/70">Dernière commande 30 min avant la fermeture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5 bg-[#1a1a19] text-white/30 text-center text-sm">
        <p>© {new Date().getFullYear()} L'Oeuforie Matinale. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
