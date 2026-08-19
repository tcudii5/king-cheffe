export default function Home() {
  const gallery = ["food-2.jpg", "food-3.jpg", "food-4.jpg", "food-5.jpg", "food-6.jpg", "food-7.jpg"];

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="King Cheffe home">
          <span className="brand-mark">K</span>
          <span>KING<br />CHEFFE</span>
        </a>
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">The Chef</a>
          <a href="#gallery">Gallery</a>
        </div>
        <a className="nav-cta" href="tel:+13232436728">Reserve your experience</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Baltimore · DC · nationwide</p>
          <h1>THE ULTIMATE<br /><em>FLAVOR</em><br />EXPERIENCE.</h1>
          <p className="lede">Award-worthy comfort food, standout private dining, and the legendary Mac n Sheeesh—made to be remembered.</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+13232436728">Reserve now <span>↗</span></a>
            <a className="text-link" href="#menu">Explore cuisine <span>↓</span></a>
          </div>
          <div className="social-proof">
            <div className="avatars"><img src="/profile.jpg" alt="King Cheffe" /><span>355K+</span></div>
            <p><strong>A food community that knows flavor.</strong><br />Follow the movement @kingcheffe</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src="/food-1.jpg" alt="King Cheffe signature comfort food" /></div>
          <div className="stamp"><span>HOME OF THE</span><strong>MAC N<br />SHEEESH</strong><i>★</i></div>
          <div className="hero-note"><b>KC</b><span>Private dining<br />& catering</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Service areas"><div>PRIVATE DINING <b>✦</b> CATERING <b>✦</b> BALTIMORE <b>✦</b> DC <b>✦</b> LA <b>✦</b> NY / NJ <b>✦</b> TEXAS <b>✦</b> ATLANTA <b>✦</b></div></section>

      <section className="menu-section shell" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Craveable food</p><h2>DINING WITH<br /><em>AN ATTITUDE.</em></h2></div>
          <p>Our food is rich, unforgettable, and built to bring the energy to every kind of gathering.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card dark"><span className="card-number">01 / THE ICON</span><div><p>RICH. CREAMY. UNFORGETTABLE.</p><h3>Mac n<br />Sheeesh</h3><a href="tel:+13232436728">Explore the menu ↗</a></div></article>
          <article className="feature-image"><img src="/food-8.jpg" alt="A signature King Cheffe dish" /></article>
          <article className="feature-card gold"><span className="card-number">02 / YOUR MOMENT</span><div><p>THE TABLE IS YOURS</p><h3>Private<br />Dining</h3><a href="tel:+13232436728">Plan your table ↗</a></div></article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-inner">
          <div className="about-photo"><img src="/profile.jpg" alt="King Cheffe" /><span>CHEF / CREATOR / HOST</span></div>
          <div className="about-copy"><p className="eyebrow light"><span /> The vibe starts here</p><h2>FOOD THAT<br /><em>GOES WITH</em><br />THE MOMENT.</h2><p>King Cheffe brings a show-stopping dining experience wherever the table is set. Intimate dinners, packed events, late-night cravings—every booking has flavor and a little attitude.</p><div className="stats"><div><strong>355K+</strong><span>FOOD LOVERS</span></div><div><strong>7</strong><span>MARKETS SERVED</span></div><div><strong>1</strong><span>KING CHEFFE</span></div></div><a className="button light-button" href="https://www.instagram.com/kingcheffe" target="_blank" rel="noreferrer">Follow on Instagram ↗</a></div>
        </div>
      </section>

      <section className="gallery shell" id="gallery">
        <div className="section-heading compact"><div><p className="eyebrow"><span /> Fresh from the feed</p><h2>FOLLOW THE<br /><em>FLAVOR.</em></h2></div><a className="text-link" href="https://www.instagram.com/kingcheffe" target="_blank" rel="noreferrer">@kingcheffe ↗</a></div>
        <div className="gallery-grid">{gallery.map((image, index) => <figure key={image} className={`tile tile-${index + 1}`}><img src={`/${image}`} alt={`King Cheffe food creation ${index + 1}`} /></figure>)}</div>
      </section>

      <section className="cta-section"><div className="shell"><p className="eyebrow light"><span /> Let’s make it a feast</p><h2>MAKE IT A<br /><em>KING CHEFFE</em><br />NIGHT.</h2><p>Private dinner, celebration, or full-scale event—tell us what you’re planning.</p><a className="button gold-button" href="tel:+13232436728">Reserve now <span>↗</span></a></div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">KC</span><span>KING CHEFFE</span></a><p>Traveling chef & caterer<br />Downtown Baltimore, MD</p><div><a href="tel:+13232436728">323-243-6728</a><a href="https://www.instagram.com/kingcheffe" target="_blank" rel="noreferrer">Instagram ↗</a></div><small>© 2026 KING CHEFFE. ALL FLAVOR RESERVED.</small></footer>
      <a className="mobile-book" href="tel:+13232436728">BOOK KING CHEFFE <span>↗</span></a>
    </main>
  );
}
