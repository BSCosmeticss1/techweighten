import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Reach out through your preferred channel. We're here to help and typically respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border/30">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                {/* Email - Enhanced */}
                <div className="group flex items-start gap-5 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Email</h4>
                    <div className="flex flex-col gap-1">
                      <a 
                        href="mailto:info@techweight.com" 
                        className="block max-w-full break-all sm:break-normal text-muted-foreground hover:text-blue-600 transition-colors text-base"
                      >
                        info@techweight.com
                      </a>
                      <a 
                        href="mailto:techweightenterprises@outlook.com" 
                        className="block max-w-full break-all sm:break-normal text-muted-foreground hover:text-blue-600 transition-colors text-base"
                      >
                        techweighterprises@outlook.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone - Enhanced */}
                <div className="group flex items-start gap-5 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-all">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Phone</h4>
                    <div className="flex flex-col gap-1">
                      <a 
                        href="tel:+2347065755293" 
                        className="text-muted-foreground hover:text-purple-600 transition-colors text-base"
                      >
                        +234 707 732 3600
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp - NEW SECTION */}
                <div className="group flex items-start gap-5 p-4 rounded-xl hover:bg-green-500/5 transition-all duration-300 border border-green-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all">
                    <FaWhatsapp className="text-green-600" size={26} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground text-lg">WhatsApp</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-600">
                        Quick Response
                      </span>
                    </div>
                    <a 
                      href="https://wa.me/2347077323600" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-green-600 transition-colors text-base flex items-center gap-2 group/link"
                    >
                      +234 706 575 5293
                      <span className="text-green-600 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Available for instant messaging and support
                    </p>
                  </div>
                </div>

                {/* Address - Enhanced */}
                <div className="group flex items-start gap-5 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Office Address</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      No 33 Maduagwu Moronu Street,<br />
                      Masha Surulere, Lagos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Social Media & Connect */}
          <div className="space-y-8">
            {/* Social Media Card - Enhanced */}
            <div className="bg-gradient-to-br from-card to-card/90 rounded-2xl p-8 border border-border/50 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Connect With Us</h3>
                <p className="text-muted-foreground">
                  Follow us for updates, tips, and community engagement
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/techweighten/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-gradient-to-b from-background to-background/50 p-5 hover:border-pink-500/50 hover:from-pink-500/5 hover:to-pink-500/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <FaInstagram className="h-7 w-7 text-pink-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">Instagram</span>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/techweighten"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-gradient-to-b from-background to-background/50 p-5 hover:border-foreground/50 hover:from-foreground/5 hover:to-foreground/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-transparent to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <FaTwitter className="h-7 w-7 text-foreground group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">X</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61585001557105"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-gradient-to-b from-background to-background/50 p-5 hover:border-blue-600/50 hover:from-blue-600/5 hover:to-blue-600/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <FaFacebookF className="h-7 w-7 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">Facebook</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@techweighten"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-gradient-to-b from-background to-background/50 p-5 hover:border-foreground/50 hover:from-foreground/5 hover:to-foreground/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <FaTiktok className="h-7 w-7 text-foreground group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">TikTok</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@techweighten?si=cHLaHHxsaf-WxH0f"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-gradient-to-b from-background to-background/50 p-5 hover:border-red-600/50 hover:from-red-600/5 hover:to-red-600/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <FaYoutube className="h-7 w-7 text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">YouTube</span>
                </a>

              </div>

              <div className="mt-8 pt-8 border-t border-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  Connect with us across platforms for the latest updates and insights
                </p>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within <span className="font-semibold text-primary">24 hours</span> on weekdays. WhatsApp messages get the fastest response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
