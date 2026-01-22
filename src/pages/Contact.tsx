import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Send, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import pumpkinLogo from "@/assets/pumpkin-logo-transparent.png";
import Footer from "@/components/Footer";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_prk674k";
const EMAILJS_TEMPLATE_ID = "template_49ikcq7";
const EMAILJS_PUBLIC_KEY = "NH33suJTz5sMxnMxc";

const Contact = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navItems = [
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/follow", label: "Follow" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "andreamiramartin@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "The message has been received",
        description: "Your words have slipped through the veil. I'll find you in the quiet hours.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "The shadows swallowed it",
        description: "Something went wrong. The darkness isn't cooperating—try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={pumpkinLogo}
              alt="A.M.Martin Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-serif text-base tracking-wide text-cream/80 group-hover:text-cream transition-colors duration-500">
              A.M.Martin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-[0.25em] uppercase transition-all duration-500 ${
                  isActive(item.path)
                    ? "text-cream"
                    : "text-cream-muted/60 hover:text-cream-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cream/60 hover:text-cream transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-ember/10">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-cream"
                      : "text-cream-muted/60 hover:text-cream-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ember/10 border border-ember/30 mb-6">
              <Mail className="w-7 h-7 text-ember" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Reach Through the Dark
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Have a question, collaboration idea, or just want to say hello? 
              The shadows are listening.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 fade-in-delayed-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="bg-charcoal-light border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-ember focus:ring-ember/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="bg-charcoal-light border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-ember focus:ring-ember/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground/80">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What brings you here?"
                value={formData.subject}
                onChange={handleChange}
                required
                maxLength={200}
                className="bg-charcoal-light border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-ember focus:ring-ember/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground/80">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Speak your mind..."
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
                rows={6}
                className="bg-charcoal-light border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-ember focus:ring-ember/20 resize-none"
              />
              <p className="text-xs text-muted-foreground/50 text-right">
                {formData.message.length}/2000
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-ember hover:bg-ember/90 text-white font-medium py-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 pt-8 border-t border-border/30 text-center fade-in-delayed-2">
            <p className="text-muted-foreground text-sm">
              Prefer other channels? Find me on{" "}
              <a
                href="https://tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ember hover:text-ember/80 transition-colors"
              >
                Tumblr
              </a>{" "}
              or check the{" "}
              <Link
                to="/follow"
                className="text-ember hover:text-ember/80 transition-colors"
              >
                Follow page
              </Link>{" "}
              for all platforms.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
