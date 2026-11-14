import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, Zap, Users, Mountain, Briefcase } from "lucide-react";
import { useState } from "react";

/**
 * Sandhya Rentals: Modern Luxury with Tech-Forward Minimalism
 * Design Philosophy: Asymmetrical flow with strategic breathing, copper accent lines,
 * mountain-inspired dividers. Premium yet inviting. Tech-savvy but warm.
 */

const ROCKWAY_BOOKING_URL = "https://book.balakrishnangroup.com/listings/566609";
const ROCKWAY_PHOTO_COUNT = 41;
const STAIRWAY_PHOTO_COUNT = 29;
const STAIRWAY_BOOKING_URL = "https://hometeamluxuryrentals.com/properties/stairway-to-heaven-7br-luxury-pickle-ball-mountain-views-broken-bow";

export default function Home() {
  const [activeTab, setActiveTab] = useState("leisure");
  const [propertyTab, setPropertyTab] = useState("stairway");
  const [rockwayPhoto, setRockwayPhoto] = useState(0);
  const [stairwayPhoto, setStairwayPhoto] = useState(0);
  const stairwayPhotos = Array.from(
    { length: STAIRWAY_PHOTO_COUNT },
    (_, i) => `${import.meta.env.BASE_URL}images/stairway/stairway-${String(i + 1).padStart(2, "0")}.jpg`
  );
  const rockwayPhotos = Array.from(
    { length: ROCKWAY_PHOTO_COUNT },
    (_, i) => `${import.meta.env.BASE_URL}images/rockway/rockway-${String(i + 1).padStart(2, "0")}.jpg`
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">Sandhya Rentals</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm hover:text-accent transition">About</a>
            <a href="#properties" className="text-sm hover:text-accent transition">Properties</a>
            <a href="#services" className="text-sm hover:text-accent transition">Services</a>
            <a href="#contact" className="text-sm hover:text-accent transition">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text (Asymmetrical) */}
            <div className="space-y-6">
              {/* Copper accent line */}
              <div className="w-12 h-1 bg-accent"></div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
                Luxury Retreats, <span className="text-accent">Unforgettable Experiences</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Silicon Valley expertise meets premium hospitality. We curate exceptional vacation and corporate retreat experiences across California and Oklahoma.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#properties" className="no-underline">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Explore Properties <ArrowRight size={18} />
                  </Button>
                </a>
                <a href="#about" className="no-underline">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 gap-2">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Hero Image - Stairway to Heaven */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/stairway/stairway-hero-aerial.jpg`}
                alt="Stairway to Heaven - Luxury mountain cabin in Broken Bow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Divider */}
      <svg className="w-full h-20 text-background fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 L150,20 L300,60 L450,10 L600,45 L750,25 L900,55 L1050,30 L1200,50 L1200,120 L0,120 Z" />
      </svg>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: About Image - Silicon Valley meets Hospitality */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src={`${import.meta.env.BASE_URL}images/site/about-game-loft.jpg`}
                alt="Loft game room with foosball, bunk beds, and bean bags at Stairway to Heaven"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text (Asymmetrical) */}
            <div className="space-y-6 order-1 md:order-2">
              <div className="w-12 h-1 bg-accent"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Passion Meets <span className="text-accent">Precision</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a Silicon Valley entrepreneur with a deep passion for hospitality and experiential design. After years in tech, I discovered the transformative power of creating spaces where people connect, collaborate, and create memories.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My portfolio represents this philosophy: luxury properties engineered for maximum guest satisfaction, from immersive themed rooms to curated amenities that spark conversation and connection.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Tech-Driven Approach</h3>
                    <p className="text-sm text-foreground/70">Data-informed design and dynamic pricing strategies</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Guest-Centric Design</h3>
                    <p className="text-sm text-foreground/70">Every detail crafted for maximum delight and comfort</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mountain className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Destination Experiences</h3>
                    <p className="text-sm text-foreground/70">Properties people talk about unprompted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Divider */}
      <svg className="w-full h-20 text-secondary/5 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 L150,20 L300,60 L450,10 L600,45 L750,25 L900,55 L1050,30 L1200,50 L1200,120 L0,120 Z" />
      </svg>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Tailored Experiences for Every Need
            </h2>
            <p className="text-lg text-foreground/80">
              Whether you're seeking a family vacation, corporate retreat, or Bay Area corporate housing, we craft experiences that exceed expectations.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("leisure")}
              className={`pb-4 px-2 font-semibold transition ${
                activeTab === "leisure"
                  ? "text-accent border-b-2 border-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Leisure Retreats
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`pb-4 px-2 font-semibold transition ${
                activeTab === "corporate"
                  ? "text-accent border-b-2 border-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Corporate Retreats
            </button>
            <button
              onClick={() => setActiveTab("bay-area")}
              className={`pb-4 px-2 font-semibold transition ${
                activeTab === "bay-area"
                  ? "text-accent border-b-2 border-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Bay Area Corporate Housing
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {activeTab === "leisure" && (
                <>
                  <h3 className="text-3xl font-bold text-primary">Unforgettable Family Vacations</h3>
                  <p className="text-lg text-foreground/80">
                    Stairway to Heaven is designed for families seeking adventure. Themed bedrooms spark imagination, outdoor amenities encourage bonding, and the mountain setting provides the perfect backdrop for memories that last a lifetime.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>7 beautifully themed bedrooms (Game of Thrones, Star Wars, Marvel, Disney, Harry Potter, Western, Arcade)</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Sleeps up to 24 guests with premium king beds throughout</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Movie theater, game room, hot tub, fire pit, and outdoor dining</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Panoramic forest views overlooking Ouachita National Forest</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "corporate" && (
                <>
                  <h3 className="text-3xl font-bold text-primary">Strategic Team Retreats</h3>
                  <p className="text-lg text-foreground/80">
                    Broken Bow offers the perfect escape for corporate teams. Away from distractions, your team can focus on collaboration, strategy, and connection. Our property provides the ideal setting for brainstorming, team-building, and relationship-building.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Capacity for 18-24 guests with flexible room configurations</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Multiple gathering spaces: movie theater, game room, outdoor pavilion</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>High-speed internet and smart home technology throughout</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Immersive themed environments spark creativity and conversation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Outdoor activities: hiking, pickleball, fire pit gatherings</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "bay-area" && (
                <>
                  <h3 className="text-3xl font-bold text-primary">Bay Area Corporate Housing</h3>
                  <p className="text-lg text-foreground/80">
                    Our spacious 4-bedroom, 7-bed San Jose home in Alum Rock sits close to Downtown SJ, with room for up to 14 guests. Ideal for families, work crews, wedding groups, and long stays.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Alum Rock, East San Jose, minutes from Downtown SJ</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>4 bedrooms, 7 beds, 3 bathrooms, sleeps 14</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Dedicated workspace desks in three bedrooms</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>100" TV living room with large sectional and 8-seat dining table</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Easy access to freeways, dining, shopping, and South Bay destinations</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {activeTab === "leisure" && (
                <img
                  src={`${import.meta.env.BASE_URL}images/site/leisure-fire-pit.jpg`}
                  alt="Fire pit under string lights at Stairway to Heaven"
                  className="w-full h-full object-cover"
                />
              )}
              {activeTab === "corporate" && (
                <img
                  src={`${import.meta.env.BASE_URL}images/site/corporate-great-room.jpg`}
                  alt="Great room with long dining table and open kitchen for team sessions"
                  className="w-full h-full object-cover"
                />
              )}
              {activeTab === "bay-area" && (
                <img
                  src={`${import.meta.env.BASE_URL}images/site/bay-area-living.jpg`}
                  alt="San Jose living room with work table and 100-inch TV"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Divider */}
      <svg className="w-full h-20 text-background fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 L150,20 L300,60 L450,10 L600,45 L750,25 L900,55 L1050,30 L1200,50 L1200,120 L0,120 Z" />
      </svg>

      {/* Properties Section */}
      <section id="properties" className="py-20 md:py-32 bg-secondary/5">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-foreground/80">
              Premium properties strategically located for vacation retreats and corporate collaboration.
            </p>
          </div>

          {/* Property Tabs */}
          <div className="flex gap-4 mb-12 border-b border-border">
            <button
              onClick={() => setPropertyTab("stairway")}
              className={`pb-4 px-2 font-semibold transition ${
                propertyTab === "stairway"
                  ? "text-accent border-b-2 border-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Stairway to Heaven (Broken Bow)
            </button>
            <button
              onClick={() => setPropertyTab("berryessa")}
              className={`pb-4 px-2 font-semibold transition ${
                propertyTab === "berryessa"
                  ? "text-accent border-b-2 border-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              San Jose Corporate Housing
            </button>
          </div>

          {/* Stairway to Heaven Card */}
          {propertyTab === "stairway" && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-full min-h-96 overflow-hidden bg-black">
                  <img
                    src={stairwayPhotos[stairwayPhoto]}
                    alt={`Stairway to Heaven photo ${stairwayPhoto + 1} of ${stairwayPhotos.length}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() => setStairwayPhoto((stairwayPhoto - 1 + stairwayPhotos.length) % stairwayPhotos.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary shadow hover:bg-white"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() => setStairwayPhoto((stairwayPhoto + 1) % stairwayPhotos.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary shadow hover:bg-white"
                  >
                    <ArrowRight size={20} />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    {stairwayPhoto + 1} / {stairwayPhotos.length}
                  </span>
                </div>

                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Stairway to Heaven</h3>
                    <p className="text-accent font-semibold mb-2">118 Pecan Bend Lane, Broken Bow, Oklahoma</p>
                    <p className="text-foreground/70">Hochatown, Kiamichi Mountains</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">7</p>
                      <p className="text-sm text-foreground/70">Bedrooms</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">4.5</p>
                      <p className="text-sm text-foreground/70">Bathrooms</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">24</p>
                      <p className="text-sm text-foreground/70">Max Guests</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Signature Amenities</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Immersive themed bedrooms with premium bedding
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Private movie theater and game room
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Hot tub, sauna, and fire pit
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Panoramic forest views and wraparound deck
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Smart home technology and high-speed internet
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Why Stairway to Heaven Stands Out</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Located in the heart of Broken Bow's most coveted Hochatown neighborhood, Stairway to Heaven commands premium nightly rates ($1,000+) by delivering an immersive, cinematic experience. Every detail—from fantasy-themed bedrooms to curated outdoor amenities—is engineered for Instagram-worthy moments and unforgettable memories. Whether hosting a family reunion, corporate retreat, or milestone celebration, this property transforms ordinary gatherings into legendary experiences.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href={STAIRWAY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        Book Direct <ArrowRight size={18} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Berryessa Corporate Housing Card */}
          {propertyTab === "berryessa" && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-full min-h-96 overflow-hidden bg-black">
                  <img
                    src={rockwayPhotos[rockwayPhoto]}
                    alt={`San Jose corporate housing photo ${rockwayPhoto + 1} of ${rockwayPhotos.length}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() => setRockwayPhoto((rockwayPhoto - 1 + rockwayPhotos.length) % rockwayPhotos.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary shadow hover:bg-white"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() => setRockwayPhoto((rockwayPhoto + 1) % rockwayPhotos.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary shadow hover:bg-white"
                  >
                    <ArrowRight size={20} />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    {rockwayPhoto + 1} / {rockwayPhotos.length}
                  </span>
                </div>

                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Spacious 4BR Near Downtown SJ</h3>
                    <p className="text-accent font-semibold mb-2">Alum Rock, San Jose, California</p>
                    <p className="text-foreground/70">4 bedrooms, 7 beds, sleeps 14</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">4</p>
                      <p className="text-sm text-foreground/70">Bedrooms</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">3</p>
                      <p className="text-sm text-foreground/70">Bathrooms</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">14</p>
                      <p className="text-sm text-foreground/70">Max Guests</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Home Features</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> King, queen, and full beds across 4 bedrooms
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Primary suite with ensuite bath, tub, and bidet
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Dedicated workspace desks and 43" TVs in bedrooms
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> 100" TV living room with large sectional
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> 8-seat formal dining plus extra round table
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Perfect for Groups and Long Stays</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Bring the whole group to this two-story San Jose home in Alum Rock, close to Downtown SJ. Plenty of sleeping space for families, work crews, wedding groups, and extended corporate stays, with easy access to dining, shopping, freeways, parks, and major South Bay destinations.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href={ROCKWAY_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="no-underline">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        Book Direct <ArrowRight size={18} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mountain Divider */}
      <svg className="w-full h-20 text-secondary/5 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 L150,20 L300,60 L450,10 L600,45 L750,25 L900,55 L1050,30 L1200,50 L1200,120 L0,120 Z" />
      </svg>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Let's Create Something <span className="text-accent">Extraordinary</span>
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Whether you're planning a family vacation, corporate retreat, or seeking the perfect Bay Area corporate housing, I'd love to help make it unforgettable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:service@sandhyarentals.biz" className="text-accent hover:underline">
                  service@sandhyarentals.biz
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <a href="tel:+14084311846" className="text-accent hover:underline">
                  (408) 431-1846
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Based In</h3>
                <p className="text-foreground/80">Silicon Valley, California</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Book Your Experience?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Visit our listings to check availability and reserve your dates.
              </p>
              <a href="mailto:service@sandhyarentals.biz" className="no-underline">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  Get in Touch <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sandhya Rentals</h4>
              <p className="text-primary-foreground/80">
                Luxury vacation and corporate retreat experiences in Broken Bow, Oklahoma and the Bay Area.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition">About</a></li>
                <li><a href="#services" className="hover:text-accent transition">Services</a></li>
                <li><a href="#properties" className="hover:text-accent transition">Properties</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={STAIRWAY_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Book Stairway to Heaven</a></li>
                <li><a href={ROCKWAY_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Book San Jose Corporate Housing</a></li>
                <li><a href="mailto:service@sandhyarentals.biz" className="hover:text-accent transition">Email</a></li>
                <li><a href="tel:+14084311846" className="hover:text-accent transition">Phone</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2026 Sandhya Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
