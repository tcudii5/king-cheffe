const menu = [
  ["01", "Mac n Sheeesh", "Three-cheese baked pasta, caramelized top, signature seasoning", "Signature"],
  ["02", "Fried Lobster", "Crispy lobster tail, charred lemon, chef’s sauce", "Chef’s pick"],
  ["03", "Honey-Hot Wings", "Golden wings, glossy sweet heat, cooling dip", "Crowd favorite"],
  ["04", "Loaded Pasta", "Creamy pasta, savory layers, seasonal garnish", "Comfort classic"],
];

export default function Home() {
  return <main>
    <section className="opening" id="top">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top">KING<span>CHEFFE</span></a>
        <div className="top-links"><a href="#menu">Menu</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <a className="reserve-link" href="tel:+13232436728">Book an event <b>↗</b></a>
      </nav>
      <div className="hero-frame">
        <video className="hero-video" autoPlay muted loop playsInline poster="/king-cheffe-mac.png" aria-label="Cinematic King Cheffe food preparation video"><source src="/king-cheffe-film.mp4" type="video/mp4" /></video>
        <div className="hero-wash" />
        <div className="hero-copy"><p className="kicker">Baltimore / DC / nationwide</p><h1>THE TABLE<br />IS THE<br /><i>STAGE.</i></h1><p className="hero-sub">Catering and private dining with flavor, rhythm, and the legendary Mac n Sheeesh.</p><a className="round-play" href="#experience" aria-label="Discover the King Cheffe experience"><span>Discover<br />the vibe</span><b>↓</b></a></div>
        <div className="hero-bottom"><span>01—KING CHEFFE</span><span>PRIVATE DINING / CATERING</span><span className="live-dot"><i /> KITCHEN LIVE</span></div>
      </div>
    </section>
    <section className="statement" id="experience"><div className="statement-grid"><p className="eyeline">The flavor is the event.</p><h2>NOT JUST<br />FOOD.<br /><em>A MOMENT.</em></h2><p className="statement-body">King Cheffe creates the kind of spread that makes people stop talking, lean in, and take another picture. Every plate is made for the memory.</p><div className="statement-stat"><strong>355K</strong><span>FOOD LOVERS<br />FOLLOW THE FLAVOR</span></div></div></section>
    <section className="film-strip" aria-label="Signature food montage"><img src="/king-cheffe-feast.png" alt="King Cheffe luxury comfort food spread" /><div className="strip-copy"><span>COMFORT</span><b>✦</b><span>HEAT</span><b>✦</b><span>FLAVOR</span><b>✦</b><span>COMFORT</span></div></section>
    <section className="menu-section" id="menu"><header className="menu-header"><p className="eyeline">A taste of King Cheffe</p><h2>THE<br /><em>MENU</em></h2><p>Chef-curated comfort food for gatherings that deserve a little extra.</p></header><div className="menu-grid"><div className="menu-art"><img src="/king-cheffe-mac.png" alt="Creamy King Cheffe macaroni and cheese" /><span>HOME OF THE<br /><b>MAC N SHEEESH</b></span></div><div className="menu-list">{menu.map(([number, name, description, label]) => <article key={name}><span className="dish-number">{number}</span><div><h3>{name}</h3><p>{description}</p></div><small>{label}</small></article>)}<a className="menu-cta" href="tel:+13232436728">Request your custom menu <b>↗</b></a></div></div><p className="menu-fine">Menu selections are personalized for each event. Dietary requests welcome.</p></section>
    <section className="motion-canvas"><div className="canvas-image"><img src="/king-cheffe-fire.png" alt="Chef applying flame to a signature dish" /></div><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="scanline" /><div className="canvas-copy"><p className="eyeline">Made to move a room</p><h2>BRING<br />THE <em>HEAT.</em></h2><p>From a table for two to a room full of celebration, the energy arrives with every plate.</p><a href="tel:+13232436728">Plan your event <b>↗</b></a></div><p className="canvas-stamp">KC<br /><span>EST. FOR<br />THE MOMENT</span></p></section>
    <section className="services"><p className="eyeline">Choose your moment</p><div className="service-row"><span>01</span><h3>Private dining</h3><p>Intimate tables, a custom menu, and a chef-led experience.</p><a href="tel:+13232436728">Book ↗</a></div><div className="service-row"><span>02</span><h3>Celebrations</h3><p>Birthdays, brunches, and the kind of nights people remember.</p><a href="tel:+13232436728">Book ↗</a></div><div className="service-row"><span>03</span><h3>Event catering</h3><p>Big flavor and generous spreads, from Baltimore to beyond.</p><a href="tel:+13232436728">Book ↗</a></div></section>
    <footer id="contact"><div><a className="wordmark" href="#top">KING<span>CHEFFE</span></a><p>Traveling chef & caterer<br />Downtown Baltimore</p></div><div><a href="tel:+13232436728">323-243-6728</a><a href="https://www.instagram.com/kingcheffe" target="_blank" rel="noreferrer">Instagram ↗</a></div><p className="footer-note">THE TABLE IS WAITING.<br />LET&apos;S MAKE IT A MOMENT.</p></footer><a className="mobile-reserve" href="tel:+13232436728">Book King Cheffe <b>↗</b></a>
  </main>;
}
