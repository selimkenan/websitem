import React from 'react';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="foto/logo.jpg" alt="Şirket Logosu" />
      </div>
      <nav>
        <ul>
          <li><button><a href="#anasayfa">Anasayfa</a></button></li>
          <li><button><a href="#about-us">Hakkımızda</a></button></li>
          <li><button><a href="#hizmet">Hizmetlerimiz</a></button></li>
          <li><button><a href="#iletisim">İletişim</a></button></li>
        </ul>
      </nav>
      <div className="dropdown">
        <button className="dropbtn"><img src="foto/tr.png" alt="Türkçe" />Tr</button>
        <div className="dropdown-content">
          <a href="#"><img src="foto/tr.png" alt="Türkçe" /> Tr</a>
          <a href="#"><img src="foto/ar.png" alt="Arapça" /> Ar</a>
          <a href="#"><img src="foto/en.png" alt="İngilizce" /> En</a>
        </div>
      </div>
    </header>
  );
}

function Slider() {
  return (
    <div className="slider1">
      <div className="slider-text">
        <h1>Evrakların Onaylanması</h1>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <main id="about-us">
      <h2>Hizmet Detayları</h2>
      <div className="about-container">
        <div className="about-text">
          <p>ACCESS Services And Consulting bireylerin ve şirketlerin her türlü tercüme hizmetine en kolay şekilde ulaşmasını sağlayan, aynı zamanda kaliteli ve hızlı hizmet vermek için Türkiye’nin en güvenilir ve en nitelikli tercümanlarını bünyesinde barındıran bir tercüme platformudur...</p>
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div className="contact-info">
        <h2>İletişim Bilgileri</h2>
        <p><strong>Telefon:</strong> 0535 343 17 14 - 0536 220 43 43</p>
        <p><strong>Email:</strong> info@access-tr.com</p>
        <p><strong>Çalışma Saatleri:</strong> Pazartesi-Cuma, 8AM - 5PM</p>
        <p><strong>Adres:</strong> İncilipınar Mah. Mehmet Öte cd. Yüncüler iş merkezi Kat: 2 NO: 35 Gaziantep/Türkiye</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/access.tr.co?mibextid=ZbWKwL"><img src="foto/f.jpg" alt="Facebook" className="social-icon" /></a>
          <a href="https://api.whatsapp.com/send/?phone=905353431714&text&type=phone_number&app_absent=0"><img src="foto/w.jpg" alt="WhatsApp" className="social-icon" /></a>
          <a href="https://www.instagram.com/access.tr.co?igsh=dDk3OGFsNmY0MHpl"><img src="foto/in.jpg" alt="Instagram" className="social-icon" /></a>
          <a href="#"><img src="foto/t.jpg" alt="Twitter" className="social-icon" /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Şirket Adı. Tüm hakları saklıdır.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="b">
      <Header />
      <Slider />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
