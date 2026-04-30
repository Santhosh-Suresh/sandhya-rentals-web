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
  const [propertyTab, setPropertyTab] = useState("stairway");

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
                    Berryessa Corporate Housing provides the ideal off-site retreat for Silicon Valley companies. Close to major tech hubs yet offering a serene environment for strategic planning, team collaboration, and relationship building.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Located in Berryessa, San Jose Bay Area</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Professional meeting and collaboration spaces</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>High-speed internet and premium tech infrastructure</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Perfect for executive retreats, product launches, and team-building</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Outdoor patio and premium furnishings</span>
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
              Berryessa Corporate Housing
            </button>
          </div>

          {/* Stairway to Heaven Card */}
          {propertyTab === "stairway" && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-full overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663144327334/CgXDrAR24RP5MXtS2qTKYa/property-luxury-interior-7eTjkBZHdRb5eeMCWLPP7q.webp"
                    alt="Luxury themed bedroom in Stairway to Heaven"
                    className="w-full h-full object-cover"
                  />
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
                    <a href="https://www.airbnb.com/rooms/1615494606725655003?source_impression_id=p3_1770419505_P3D-wfvLT2ig9P8h" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        View on Airbnb <ArrowRight size={18} />
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
                <div className="relative h-96 md:h-full overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Briefcase className="w-24 h-24 text-accent/40 mx-auto mb-4" />
                    <p className="text-foreground/40 font-medium">Berryessa Corporate Housing</p>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Berryessa Corporate Housing</h3>
                    <p className="text-accent font-semibold mb-2">San Jose Bay Area, California</p>
                    <p className="text-foreground/70">Premium corporate retreat and team collaboration space</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">4-6</p>
                      <p className="text-sm text-foreground/70">Bedrooms</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">3</p>
                      <p className="text-sm text-foreground/70">Bathrooms</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">12-16</p>
                      <p className="text-sm text-foreground/70">Max Guests</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Corporate Housing Features</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Professional meeting and collaboration spaces
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> High-speed internet and tech infrastructure
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Outdoor patio for team activities
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Close to Silicon Valley tech hubs
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span> Premium furnishings and modern amenities
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Perfect for Bay Area Teams</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Located in the heart of the Bay Area, Berryessa Corporate Housing offers the ideal off-site retreat for Silicon Valley companies. Close to major tech hubs yet offering a serene environment for strategic planning, team collaboration, and relationship building. Perfect for executive retreats, product launches, and team-building events.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href="mailto:service@sandhyarentals.biz" className="no-underline">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        Inquire About Availability <ArrowRight size={18} />
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
                <li><a href="https://www.airbnb.com/rooms/1615494606725655003" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Stairway to Heaven on Airbnb</a></li>
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
