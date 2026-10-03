"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu as MenuIcon,
  MoveUpRight,
  Phone,
  Play,
  Plus,
  Sparkles,
  Star,
  Utensils,
  X,
  Youtube,
} from "lucide-react";

const image = (id: string, width = 1000, height = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=88`;

const menuItems = [
  {
    category: "Breakfast",
    name: "Sourdough & Soft Eggs",
    description: "Whipped ricotta, chilli crisp, herbs, and two jammy eggs.",
    price: "₹395",
    tag: "Bestseller",
    type: "veg",
    image: image("photo-1484723091739-30a097e8f929", 760, 620),
  },
  {
    category: "Breakfast",
    name: "Morning Berry Bowl",
    description: "Coconut yoghurt, seasonal fruit, toasted granola, honey.",
    price: "₹325",
    tag: "Light",
    type: "veg",
    image: image("photo-1511690743698-d9d85f2fbf38", 760, 620),
  },
  {
    category: "Lunch",
    name: "Charred Chicken Plate",
    description: "Sumac chicken, herbed rice, crunchy greens, tahini.",
    price: "₹545",
    tag: "House favourite",
    type: "non-veg",
    image: image("photo-1547592180-85f173990554", 760, 620),
  },
  {
    category: "Lunch",
    name: "Miso Butter Noodles",
    description: "Hand-cut noodles, mushrooms, greens, sesame and lime.",
    price: "₹465",
    tag: "New",
    type: "veg",
    image: image("photo-1557872943-16a5ac26437e", 760, 620),
  },
  {
    category: "Dinner",
    name: "Harissa Lamb Kofta",
    description: "Smoky kofta, saffron couscous, charred lemon, mint yoghurt.",
    price: "₹675",
    tag: "Chef's pick",
    type: "non-veg",
    image: image("photo-1544025162-d76694265947", 760, 620),
  },
  {
    category: "Dinner",
    name: "Za'atar Cauliflower",
    description: "Roasted cauliflower, whipped feta, dates, pistachio dukkah.",
    price: "₹495",
    tag: "Plant based",
    type: "veg",
    image: image("photo-1512621776951-a57141f2eefd", 760, 620),
  },
  {
    category: "Drinks",
    name: "Rose Cardamom Latte",
    description: "Double espresso, steamed milk, rose, a little cardamom.",
    price: "₹245",
    tag: "Zyca ritual",
    type: "veg",
    image: image("photo-1495474472287-4d71bcdd2085", 760, 620),
  },
  {
    category: "Drinks",
    name: "Citrus Mint Tonic",
    description: "Fresh orange, mint, tonic, and a squeeze of pink grapefruit.",
    price: "₹225",
    tag: "Refreshing",
    type: "veg",
    image: image("photo-1544145945-f90425340c7e", 760, 620),
  },
  {
    category: "Desserts",
    name: "Burnt Basque Cheesecake",
    description: "Cloud-soft centre, caramelised top, and sea salt caramel.",
    price: "₹345",
    tag: "Must try",
    type: "veg",
    image: image("photo-1565958011703-44f9829ba187", 760, 620),
  },
  {
    category: "Desserts",
    name: "Rose & Pistachio Pavlova",
    description: "Crisp meringue, cardamom cream, rose and ripe berries.",
    price: "₹365",
    tag: "Sweet finish",
    type: "veg",
    image: image("photo-1488477181946-6428a0291777", 760, 620),
  },
];

const galleryItems = [
  { src: image("photo-1559339352-11d035aa65de", 850, 1100), alt: "Friends sharing a meal" },
  { src: image("photo-1552566626-52f8b828add9", 850, 700), alt: "Zyca dining room" },
  { src: image("photo-1517248135467-4c7edcad34c4", 850, 1000), alt: "Sunlit cafe tables" },
  { src: image("photo-1504674900247-0877df9cc836", 850, 850), alt: "A colourful plated meal" },
  { src: image("photo-1498837167922-ddd27525d352", 850, 1000), alt: "Fresh ingredients" },
  { src: image("photo-1547592180-85f173990554", 850, 800), alt: "Charred chicken plate" },
  { src: image("photo-1515003197210-e0cd71810b5f", 850, 900), alt: "A table set for brunch" },
  { src: image("photo-1498654896293-37aacf113fd9", 850, 850), alt: "A relaxed cafe detail" },
];

const testimonials = [
  {
    quote: "Zyca feels like the kind of place you discover once and then quietly keep to yourself. The food is thoughtful, generous and wildly delicious.",
    name: "Ananya Mehta",
    detail: "Regular since 2021",
    initials: "AM",
  },
  {
    quote: "The room is beautiful without trying too hard, and every dish has a little surprise. Our lazy Sunday lunch turned into a four-hour afternoon.",
    name: "Rohan Kapoor",
    detail: "Weekend guest",
    initials: "RK",
  },
  {
    quote: "From the warm welcome to the last sip of coffee, everything felt considered. The Basque cheesecake alone is worth the trip across town.",
    name: "Mira Shah",
    detail: "Food & design lover",
    initials: "MS",
  },
];

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Our menu", href: "#menu", id: "menu" },
  { label: "Our story", href: "#story", id: "story" },
  { label: "Moments", href: "#moments", id: "moments" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (testimonialPaused) return;
    const rotationTimer = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(rotationTimer);
  }, [testimonialPaused]);

  const filteredItems = activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingSent(true);
  };

  const changeTestimonial = (direction: number) => {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <main className="site-shell">
      <AnimatePresence>
        {isLoading && (
          <motion.div className="loading-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
            <div className="loading-logo"><span className="brand-mark"><Utensils size={17} strokeWidth={1.8} /></span><span className="brand-wordmark">zyca<span>.</span></span></div>
            <span className="loading-line" />
            <small>cafe &amp; kitchen</small>
          </motion.div>
        )}
      </AnimatePresence>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="Zyca Cafe and Kitchen home">
          <span className="brand-mark"><Utensils size={17} strokeWidth={1.8} /></span>
          <span className="brand-wordmark">zyca<span>.</span></span>
          <span className="brand-subtitle">cafe &amp; kitchen</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.id} className={activeSection === item.id ? "is-active" : ""} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contact">Visit us <ArrowUpRight size={14} /></a>
        </nav>
        <a href="#reserve" className="header-booking">Book a table <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X size={23} /> : <MenuIcon size={23} />}
        </button>
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {navItems.map((item) => (
                <a key={item.id} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)}>Visit us <ArrowUpRight size={14} /></a>
              <a className="mobile-booking" href="#reserve" onClick={() => setMobileOpen(false)}>Book a table <ArrowUpRight size={15} /></a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="hero section-anchor">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow"><span className="eyebrow-dot" /> Eat slowly. Live fully.</motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>Good food.<br /><em>Good mood.</em></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="hero-description">A neighbourhood cafe and kitchen serving honest, happy food in the heart of Bandra.</motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="hero-actions">
            <a className="button button--dark" href="#menu">Explore the menu <ArrowRight size={16} /></a>
            <a className="text-link" href="#reserve">Book a table <ArrowUpRight size={16} /></a>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} className="hero-meta">
            <div><strong>4.9</strong><span className="stars">★★★★★</span><small>on Google</small></div>
            <div className="meta-divider" />
            <div><strong>8am—11pm</strong><small>open daily</small></div>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-image-wrap">
            <img src={image("photo-1547592180-85f173990554", 1200, 1400)} alt="A colourful Zyca kitchen dish" />
            <div className="image-grain" />
          </div>
          <div className="hero-stamp"><span>made with</span><strong>♥</strong><span>good energy</span></div>
          <div className="hero-caption"><span>01</span><span className="caption-line" /><span>from our kitchen</span></div>
        </motion.div>
        <div className="hero-scroll"><span>Scroll to explore</span><ArrowDown size={15} /></div>
      </section>

      <section className="ticker" aria-label="Zyca highlights">
        <div className="ticker-track"><span>Good food, good mood</span><i>✳</i><span>Made for lingering</span><i>✳</i><span>Come as you are</span><i>✳</i><span>Good food, good mood</span><i>✳</i><span>Made for lingering</span><i>✳</i></div>
      </section>

      <section id="menu" className="menu-section section-anchor section-padding">
        <div className="section-heading-row">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <span className="eyebrow"><span className="eyebrow-dot" /> From our kitchen</span>
            <h2>A little bit of<br /><em>everything good.</em></h2>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="section-intro">Seasonal produce, familiar flavours and a few unexpected twists. Our menu changes with the mood of the market.</motion.p>
        </div>
        <div className="menu-toolbar">
          <div className="category-tabs" role="tablist" aria-label="Menu categories">
            {["All", "Breakfast", "Lunch", "Dinner", "Drinks", "Desserts"].map((category) => (
              <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>
            ))}
          </div>
          <a className="text-link text-link--muted" href="#reserve">View full menu <ArrowUpRight size={15} /></a>
        </div>
        <motion.div layout className="menu-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article layout key={item.name} className="menu-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.35 }}>
                <div className="menu-card-image"><img src={item.image} alt={item.name} /><span className="menu-tag">{item.tag}</span><span className={`diet-badge ${item.type}`}>{item.type === "veg" ? "V" : "NV"}</span></div>
                <div className="menu-card-body"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section id="story" className="story-section section-anchor section-padding">
        <div className="story-image-column">
          <motion.div className="story-image-main" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}><img src={image("photo-1552566626-52f8b828add9", 1000, 1200)} alt="The warm Zyca dining room" /></motion.div>
          <motion.div className="story-image-small" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}><img src={image("photo-1498837167922-ddd27525d352", 650, 750)} alt="Fresh ingredients on a table" /></motion.div>
          <div className="story-note"><Leaf size={16} /><span>Thoughtful<br />by nature</span></div>
        </div>
        <motion.div className="story-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <span className="eyebrow"><span className="eyebrow-dot" /> Our story</span>
          <h2>A table for<br /><em>every kind of day.</em></h2>
          <p className="story-lead">Zyca started with a simple idea: food tastes better when there is time for it.</p>
          <p>We built a space that feels like your favourite corner of home — sun on the table, music at just the right volume, and a kitchen that follows the seasons. Come in for a quick coffee or stay till the candles come on. There is always room for one more.</p>
          <a className="text-link" href="#contact">More about Zyca <ArrowUpRight size={16} /></a>
          <div className="story-stats"><div><strong>2018</strong><span>Est. in Bandra</span></div><div><strong>40+</strong><span>Things to eat</span></div><div><strong>∞</strong><span>Reasons to stay</span></div></div>
        </motion.div>
      </section>

      <section id="reserve" className="reserve-section section-anchor">
        <div className="reserve-image"><img src={image("photo-1517248135467-4c7edcad34c4", 1000, 1300)} alt="Zyca tables ready for dinner" /><div className="reserve-image-label"><Clock3 size={15} /><span>Walk-ins always welcome</span></div></div>
        <div className="reserve-content">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <span className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> Make a reservation</span>
            <h2>Save a seat<br /><em>for something good.</em></h2>
            <p>Whether it&apos;s a long lunch, a first date or just dessert on a Tuesday — we&apos;ll have the table ready.</p>
          </motion.div>
          <form className="booking-form" onSubmit={handleBooking}>
            <div className="form-row"><label><span>Your name</span><input required type="text" placeholder="e.g. Aanya Shah" /></label><label><span>Phone number</span><input required type="tel" placeholder="+91 98765 43210" /></label></div>
            <div className="form-row"><label><span>Date</span><span className="input-with-icon"><input required type="date" /><CalendarDays size={16} /></span></label><label><span>Time</span><span className="input-with-icon"><select required defaultValue=""><option value="" disabled>Select time</option><option>12:00 PM</option><option>1:30 PM</option><option>7:00 PM</option><option>8:30 PM</option><option>10:00 PM</option></select><ChevronDown size={16} /></span></label></div>
            <div className="form-row"><label><span>Guests</span><span className="input-with-icon"><select required defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select><ChevronDown size={16} /></span></label><label><span>Occasion <small>(optional)</small></span><input type="text" placeholder="Birthday, date night..." /></label></div>
            <button className="button button--cream" type="submit">{bookingSent ? <><Check size={16} /> Request received</> : <>Find a table <ArrowRight size={16} /></>}</button>
          </form>
          <AnimatePresence>{bookingSent && <motion.p className="booking-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><Check size={15} /> Thanks — we&apos;ll call shortly to confirm your table.</motion.p>}</AnimatePresence>
          <small className="booking-fineprint">For groups of 6 or more, please call <a href="tel:+912240123456">+91 22 4012 3456</a></small>
        </div>
      </section>

      <section id="moments" className="moments-section section-anchor section-padding">
        <div className="section-heading-row moments-heading">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}><span className="eyebrow"><span className="eyebrow-dot" /> Little moments</span><h2>Good times<br /><em>look like this.</em></h2></motion.div>
          <motion.div className="moments-side" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><p>Come for the food. Stay for the feeling. Tag <strong>@zycacafe</strong> to be part of our everyday.</p><a className="text-link" href="#contact">Follow along <Instagram size={16} /></a></motion.div>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.button key={item.src} className={`gallery-item gallery-item-${index + 1}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.05 }} onClick={() => setSelectedGallery(index)} aria-label={`Open photo: ${item.alt}`}><img src={item.src} alt={item.alt} /><span className="gallery-hover"><MoveUpRight size={21} /></span></motion.button>
          ))}
        </div>
      </section>

      <section className="testimonial-section section-padding" onMouseEnter={() => setTestimonialPaused(true)} onMouseLeave={() => setTestimonialPaused(false)}>
        <div className="testimonial-top"><span className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> Kind words</span><div className="testimonial-controls"><button onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial"><ChevronLeft size={18} /></button><span>{String(testimonialIndex + 1).padStart(2, "0")} / 0{testimonials.length}</span><button onClick={() => changeTestimonial(1)} aria-label="Next testimonial"><ChevronRight size={18} /></button></div></div>
        <AnimatePresence mode="wait"><motion.div key={testimonialIndex} className="testimonial-content" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.35 }}><div className="quote-mark">“</div><blockquote>{testimonials[testimonialIndex].quote}</blockquote><div className="testimonial-author"><span className="author-avatar">{testimonials[testimonialIndex].initials}</span><span><strong>{testimonials[testimonialIndex].name}</strong><small>{testimonials[testimonialIndex].detail}</small></span><span className="testimonial-stars">★★★★★</span></div></motion.div></AnimatePresence>
        <div className="testimonial-decoration"><Sparkles size={17} /><span>made with<br />good energy</span></div>
      </section>

      <section id="contact" className="contact-section section-anchor section-padding">
        <div className="contact-heading"><span className="eyebrow"><span className="eyebrow-dot" /> Come find us</span><h2>Your new<br /><em>favourite corner.</em></h2><p>We&apos;re tucked away on a leafy lane in Bandra, waiting with something warm.</p></div>
        <div className="contact-grid">
          <div className="contact-details"><div className="contact-detail"><span className="detail-icon"><MapPin size={18} /></span><div><small>Find us here</small><p>14 Hill Road, Bandra West<br />Mumbai 400050</p><a href="#map">Get directions <ArrowUpRight size={14} /></a></div></div><div className="contact-detail"><span className="detail-icon"><Clock3 size={18} /></span><div><small>Opening hours</small><p>Monday — Sunday<br />8:00 am — 11:00 pm</p></div></div><div className="contact-detail"><span className="detail-icon"><Phone size={18} /></span><div><small>Say hello</small><p><a href="tel:+912240123456">+91 22 4012 3456</a><br /><a href="mailto:hello@zycacafe.in">hello@zycacafe.in</a></p></div></div></div>
          <div id="map" className="map-card"><iframe className="map-frame" title="Map showing Zyca Cafe on Hill Road in Bandra" src="https://www.google.com/maps?q=14+Hill+Road,+Bandra+West,+Mumbai&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-overlay"><div className="map-pin"><MapPin size={19} fill="currentColor" /></div><div className="map-label"><strong>Zyca.</strong><span>14 Hill Road, Bandra</span></div></div><div className="map-zoom"><button aria-label="Zoom in"><Plus size={16} /></button><button aria-label="Zoom out"><span>−</span></button></div><a href="#contact" className="map-directions"><MapPin size={14} /> Open in maps <ArrowUpRight size={13} /></a></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><div className="footer-brand"><a className="brand brand--footer" href="#home"><span className="brand-mark"><Utensils size={17} strokeWidth={1.8} /></span><span className="brand-wordmark">zyca<span>.</span></span><span className="brand-subtitle">cafe &amp; kitchen</span></a><p>Good food. Good mood.<br />See you around.</p></div><div className="footer-links"><div><small>Explore</small><a href="#menu">Our menu</a><a href="#story">Our story</a><a href="#moments">Moments</a></div><div><small>Say hello</small><a href="tel:+912240123456">+91 22 4012 3456</a><a href="mailto:hello@zycacafe.in">hello@zycacafe.in</a><div className="social-links"><a href="#instagram" aria-label="Instagram"><Instagram size={16} /></a><a href="#facebook" aria-label="Facebook"><Facebook size={16} /></a><a href="#youtube" aria-label="Youtube"><Youtube size={16} /></a></div></div></div></div>
        <div className="footer-bottom"><span>© 2024 Zyca Cafe &amp; Kitchen</span><span>Designed for slow mornings &amp; long lunches</span><a href="#home">Back to top <ArrowUpRight size={13} /></a></div>
      </footer>

      <AnimatePresence>{selectedGallery !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedGallery(null)}><button className="lightbox-close" onClick={() => setSelectedGallery(null)} aria-label="Close photo"><X size={22} /></button><button className="lightbox-arrow lightbox-arrow--left" onClick={(event) => { event.stopPropagation(); setSelectedGallery((selectedGallery - 1 + galleryItems.length) % galleryItems.length); }} aria-label="Previous photo"><ChevronLeft size={24} /></button><motion.img key={selectedGallery} initial={{ scale: 0.94 }} animate={{ scale: 1 }} src={galleryItems[selectedGallery].src} alt={galleryItems[selectedGallery].alt} onClick={(event) => event.stopPropagation()} /><button className="lightbox-arrow lightbox-arrow--right" onClick={(event) => { event.stopPropagation(); setSelectedGallery((selectedGallery + 1) % galleryItems.length); }} aria-label="Next photo"><ChevronRight size={24} /></button></motion.div>}</AnimatePresence>
    </main>
  );
}
