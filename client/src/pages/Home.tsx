import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, Zap, Users, Mountain, Briefcase } from "lucide-react";
import { useState } from "react";

/**
 * Sandhya Rentals: Modern Luxury with Tech-Forward Minimalism
 * Design Philosophy: Asymmetrical flow with strategic breathing, copper accent lines,
 * mountain-inspired dividers. Premium yet inviting. Tech-savvy but warm.
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("leisure");

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
                Silicon Valley expertise meets Oklahoma hospitality. We curate premium vacation and corporate retreat experiences that inspire, connect, and delight.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Explore Properties <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/5">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Hero Image - Stairway to Heaven */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663144327334/CgXDrAR24RP5MXtS2qTKYa/hero-stairway-to-heaven-XT5pxuboycFomUdhWcbRbg.webp"
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663144327334/CgXDrAR24RP5MXtS2qTKYa/about-silicon-valley-hospitality-CpkHai8z25WKBzfdjrTVTi.webp"
                alt="Sandhya - Silicon Valley entrepreneur passionate about hospitality"
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
                My Broken Bow portfolio represents this philosophy: luxury properties engineered for maximum guest satisfaction, from immersive themed rooms to curated amenities that spark conversation and connection.
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
              Whether you're seeking a family vacation, romantic getaway, or corporate team-building event, we craft experiences that exceed expectations.
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
              Bay Area Visitors
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
                  <h3 className="text-3xl font-bold text-primary">Perfect Escape for Bay Area Visitors</h3>
                  <p className="text-lg text-foreground/80">
                    Silicon Valley professionals seeking respite will find Stairway to Heaven an ideal destination. Just a short flight from San Jose, Broken Bow offers stunning natural beauty, world-class hospitality, and the perfect blend of adventure and relaxation.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Close to Dallas-Fort Worth (major hub for Bay Area travelers)</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Stunning mountain views and outdoor recreation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Luxury amenities meet authentic Oklahoma hospitality</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Perfect for extended family gatherings or friend reunions</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663144327334/CgXDrAR24RP5MXtS2qTKYa/corporate-retreat-team-VTLWoFtqAfRFa4BhKfJpHC.webp"
                alt="Corporate team retreat with outdoor activities and collaboration"
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

      {/* Properties Section */}
      <section id="properties" className="py-20 md:py-32 bg-secondary/5">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Property
            </h2>
            <p className="text-lg text-foreground/80">
              Our flagship property, meticulously designed and strategically positioned in one of Oklahoma's most sought-after vacation destinations.
            </p>
          </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image - Luxury Interior */}
              <div className="relative h-96 md:h-full overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663144327334/CgXDrAR24RP5MXtS2qTKYa/property-luxury-interior-7eTjkBZHdRb5eeMCWLPP7q.webp"
                  alt="Luxury themed bedroom in Stairway to Heaven"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
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

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Signature Amenities</h4>
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

                <div className="pt-4">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    View on Airbnb <ArrowRight size={18} />
                  </Button>
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
                Whether you're planning a family vacation, corporate retreat, or seeking the perfect Bay Area escape, I'd love to help make it unforgettable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:sandhya@sandhyarentals.com" className="text-accent hover:underline">
                  sandhya@sandhyarentals.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <a href="tel:+14085551234" className="text-accent hover:underline">
                  +1 (408) 555-1234
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
                Visit our Airbnb listing to check availability and reserve your dates.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                View Stairway to Heaven on Airbnb <ArrowRight size={18} />
              </Button>
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
                Luxury vacation and corporate retreat experiences in Broken Bow, Oklahoma.
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
                <li><a href="https://airbnb.com" className="hover:text-accent transition">Airbnb Listing</a></li>
                <li><a href="https://vrbo.com" className="hover:text-accent transition">VRBO Listing</a></li>
                <li><a href="mailto:sandhya@sandhyarentals.com" className="hover:text-accent transition">Email</a></li>
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
