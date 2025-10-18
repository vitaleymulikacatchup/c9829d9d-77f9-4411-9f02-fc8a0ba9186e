"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterBase from "@/components/sections/footer/FooterBase";

const assetMap = [
  {
    "id": "hero-image",
    "url": "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Dark-themed laptop setup with a red glowing keyboard and code on screen, ideal for tech enthusiasts."
  }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "home" }, { name: "Features", id: "features" }, { name: "Pricing", id: "pricing" }, { name: "Contact", id: "contact" }]}
          brandName="Your SaaS"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Innovate with Us"
            description="Transforming the way you do business."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "Get Started", href: "https://example.com" }, { text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TextAbout
            title="Crafted for Excellence"
            buttons={[{ text: "Get Started", href: "https://example.com" }, { text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardOne
            title="Powerful Features"
            description="Explore the capabilities that make us unique."
            features={[
              { title: "Seamless Integration", description: "Effortlessly connect with your existing systems.", imageSrc: assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp" },
              { title: "Advanced Analytics", description: "Gain insights into your performance.", imageSrc: assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <PricingCardOne
            title="Choose Your Plan"
            description="Select the perfect plan for your needs."
            plans={[
              { id: "basic", badge: "Value", price: "$29/mo", subtitle: "Great for first-time buyers", features: ["Up to 10 users", "50GB Storage", "Email Support"] },
              { id: "premium", badge: "Most Popular", price: "$49/mo", subtitle: "Best for growing teams", features: ["Unlimited users", "200GB Storage", "Priority Support"] }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TestimonialCardOne
            title="Testimonials"
            description="Hear what our clients have to say."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp" },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp" },
              { id: "4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FaqBase
            title="Frequently Asked Questions"
            description="Find answers to common questions about our products and services."
            faqs={[
              { id: "1", title: "What is your return policy?", content: "We offer a 30-day money-back guarantee." },
              { id: "2", title: "How long does shipping take?", content: "Standard shipping typically takes 5-7 business days." }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactCenterForm
            title="Get in Touch"
            description="We're here to help. Reach out to us anytime."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Your Message", rows: 5, required: true }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Your SaaS"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
