import React, { useState } from 'react'
import { Scissors, Star, Users, Phone, Mail, MapPin, Menu, X, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, Sparkles, Zap, Droplet } from "lucide-react"

interface TranslationItem {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

interface TranslationTestimonial {
  name: string;
  text: string;
}

interface TranslationLanguage {
  nav: string[];
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: TranslationItem[];
    modalClose: string;
  };
  gallery: {
    title: string;
    viewDetails: string;
  };
  testimonials: {
    title: string;
    items: TranslationTestimonial[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      message: string;
      send: string;
    };
    info: {
      hours: string;
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  footer: {
    description: string;
    links: string;
    social: string;
    rights: string;
  };
  booking: {
    title: string;
    subtitle: string;
    button: string;
  };
}

interface Translations {
  en: TranslationLanguage;
  ar: TranslationLanguage;
}

const translations: Translations = {
  en: {
    nav: ['Home', 'Services', 'Gallery', 'Testimonials', 'Booking', 'Contact'],
    hero: {
      title: 'Redefine Your Beauty',
      subtitle: 'Experience the pinnacle of aesthetic transformation',
      cta: 'Book Your Consultation'
    },
    services: {
      title: 'Our Premium Services',
      modalClose: 'Close',
      items: [
        { title: 'Facial Sculpting', description: 'Discover the latest in aesthetic innovation for unparalleled results.', longDescription: 'Our facial sculpting service uses advanced techniques to enhance your natural features, creating a more defined and youthful appearance. We combine dermal fillers, botox, and other cutting-edge treatments to achieve stunning, natural-looking results.', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Body Contouring', description: 'Sculpt your body to perfection with our advanced techniques.', longDescription: 'Our body contouring treatments use state-of-the-art technology to target stubborn fat deposits and tighten skin. From non-invasive procedures to surgical options, we offer a range of solutions to help you achieve your ideal body shape.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Skin Rejuvenation', description: 'Revitalize your skin for a youthful and radiant appearance.', longDescription: 'Our skin rejuvenation treatments address a wide range of concerns, including fine lines, wrinkles, sun damage, and uneven skin tone. We use advanced laser therapies, chemical peels, and medical-grade skincare to reveal your most beautiful, glowing skin.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Hair Restoration', description: 'Regain your confidence with our advanced hair restoration treatments.', longDescription: 'Our hair restoration services combine cutting-edge technology with personalized treatment plans to address hair loss and thinning. From PRP therapy to hair transplantation, we offer solutions for both men and women seeking fuller, natural-looking hair.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Laser Treatments', description: 'Target specific skin concerns with our precision laser treatments.', longDescription: 'Our laser treatments can address a variety of skin issues, including pigmentation, vascular lesions, and unwanted hair. Using the latest in laser technology, we provide safe and effective treatments with minimal downtime.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Wellness Therapies', description: 'Enhance your overall well-being with our holistic wellness treatments.', longDescription: 'Our wellness therapies go beyond aesthetics to improve your overall health and vitality. From IV nutrient therapy to hormone optimization, we offer a range of services to help you feel your best from the inside out.', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
      ]
    },
    gallery: {
      title: 'Our Gallery',
      viewDetails: 'View Details'
    },
    testimonials: {
      title: 'Client Experiences',
      items: [
        { name: 'Sophia L.', text: 'The results are beyond my wildest dreams. I\'ve never felt more confident!' },
        { name: 'Alexander R.', text: 'Exceptional care and stunning results. EleganceMD is in a league of its own.' }
      ]
    },
    contact: {
      title: 'Get in Touch',
      form: {
        name: 'Your Name',
        message: 'Your Message',
        send: 'Send Message'
      },
      info: {
        hours: 'Opening Hours',
        weekdays: 'Monday - Friday: 9am - 7pm',
        saturday: 'Saturday: 10am - 5pm',
        sunday: 'Sunday: Closed'
      }
    },
    footer: {
      description: 'Redefining beauty with cutting-edge aesthetic treatments and personalized care.',
      links: 'Quick Links',
      social: 'Follow Us',
      rights: 'All rights reserved.'
    },
    booking: {
      title: 'Book Your Appointment',
      subtitle: 'Select a convenient time for your consultation',
      button: 'Schedule Now'
    }
  },
  ar: {
    nav: ['الرئيسية', 'الخدمات', 'المعرض', 'آراء العملاء', 'الحجز', 'اتصل بنا'],
    hero: {
      title: 'أعد تعريف جمالك',
      subtitle: 'اختبر قمة التحول الجمالي',
      cta: 'احجز استشارتك'
    },
    services: {
      title: 'خدماتنا المتميزة',
      modalClose: 'إغلاق',
      items: [
        { title: 'نحت الوجه', description: 'اكتشف أحدث الابتكارات الجمالية لنتائج لا مثيل لها.', longDescription: 'تستخدم خدمة نحت الوجه لدينا تقنيات متقدمة لتعزيز ملامحك الطبيعية، مما يخلق مظهرًا أكثر تحديدًا وشبابًا. نحن نجمع بين الحشوات الجلدية والبوتوكس وغيرها من العلاجات المتطورة لتحقيق نتائج مذهلة وطبيعية المظهر.', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'نحت الجسم', description: 'انحت جسمك إلى الكمال بتقنياتنا المتقدمة.', longDescription: 'تستخدم علاجات نحت الجسم لدينا أحدث التقنيات لاستهداف رواسب الدهون العنيدة وشد الجلد. من الإجراءات غير الجراحية إلى الخيارات الجراحية، نقدم مجموعة من الحلول لمساعدتك في تحقيق شكل الجسم المثالي الذي تريده.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'تجديد البشرة', description: 'جدد بشرتك للحصول على مظهر شبابي ومشرق.', longDescription: 'تعالج علاجات تجديد البشرة لدينا مجموعة واسعة من المشاكل، بما في ذلك الخطوط الدقيقة والتجاعيد وأضرار الشمس وعدم توحيد لون البشرة. نستخدم العلاجات بالليزر المتقدمة والتقشير الكيميائي والعناية بالبشرة ذات الدرجة الطبية للكشف عن بشرتك الأكثر جمالاً وإشراقًا.', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'استعادة الشعر', description: 'استعد ثقتك بنفسك مع علاجات استعادة الشعر المتقدمة لدينا.', longDescription: 'تجمع خدمات استعادة الشعر لدينا بين التكنولوجيا المتطورة وخطط العلاج الشخصية لمعالجة تساقط الشعر وترققه. من علاج البلازما الغنية بالصفائح الدموية إلى زراعة الشعر، نقدم حلولًا للرجال والنساء الذين يسعون للحصول على شعر أكثر كثافة وطبيعي المظهر.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'علاجات الليزر', description: 'استهدف مشاكل البشرة المحددة بعلاجات الليزر الدقيقة لدينا.', longDescription: 'يمكن لعلاجات الليزر لدينا معالجة مجموعة متنوعة من مشاكل البشرة، بما في ذلك التصبغات والآفات الوعائية والشعر غير المرغوب فيه. باستخدام أحدث تقنيات الليزر، نقدم علاجات آمنة وفعالة مع الحد الأدنى من وقت التعافي.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'علاجات الرفاهية', description: 'عزز صحتك العامة مع علاجات الرفاهية الشاملة لدينا.', longDescription: 'تتجاوز علاجات الرفاهية لدينا الجماليات لتحسين صحتك وحيويتك العامة. من العلاج بالمغذيات عن طريق الوريد إلى تحسين الهرمونات، نقدم مجموعة من الخدمات لمساعدتك على الشعور بأفضل حال من الداخل إلى الخارج.', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
      ]
    },
    gallery: {
      title: 'معرضنا',
      viewDetails: 'عرض التفاصيل'
    },
    testimonials: {
      title: 'تجارب العملاء',
      items: [
        { name: 'صوفيا ل.', text: 'النتائج تفوق أحلامي. لم أشعر بالثقة أكثر من ذلك من قبل!' },
        { name: 'الكسندر ر.', text: 'رعاية استثنائية ونتائج مذهلة. إليغانس إم دي في مستوى خاص بها.' }
      ]
    },
    contact: {
      title: 'تواصل معنا',
      form: {
        name: 'اسمك',
        message: 'رسالتك',
        send: 'إرسال الرسالة'
      },
      info: {
        hours: 'ساعات العمل',
        weekdays: 'الإثنين - الجمعة: 9 صباحًا - 7 مساءً',
        saturday: 'السبت: 10 صباحًا - 5 مساءً',
        sunday: 'الأحد: مغلق'
      }
    },
    footer: {
      description: 'إعادة تعريف الجمال مع علاجات تجميلية متطورة ورعاية شخصية.',
      links: 'روابط سريعة',
      social: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.'
    },
    booking: {
      title: 'احجز موعدك',
      subtitle: 'اختر وقتًا مناسبًا لاستشارتك',
      button: 'احجز الآن'
    }
  }
}

const sendWhatsAppMessage = (formData: FormData) => {
  const name = formData.get('name');
  const message = formData.get('message');

  const whatsappMessage = `Name: ${name}%0AMessage: ${message}`;
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappUrl, '_blank');
};

export default function BilingualLuxuryAestheticClinic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const [selectedService, setSelectedService] = useState<TranslationItem | null>(null)

  const t = translations[lang]
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const openCalendly = () => {
    const baseUrl = 'https://calendly.com/g-neroni-growa/30min?back=1&month=2024-11';
    const url = new URL(baseUrl);
    url.searchParams.append('lang', lang);
    window.open(url.toString(), '_blank');
  };

  const serviceIcons = [Scissors, Users, Star, Sparkles, Zap, Droplet]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 ${dir === 'rtl' ? 'font-arabic' : 'font-sans'}`} dir={dir}>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Scissors className="h-8 w-8 text-gold-500" />
            <span className="text-2xl font-extrabold text-gray-800">EleganceMD</span>
          </div>
          <nav className="hidden lg:flex space-x-8 rtl:space-x-reverse">
            {t.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                 className="text-gray-600 hover:text-gold-500 transition duration-300">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="relative">
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className={`flex items-center justify-center bg-gold-500 text-white hover:bg-gold-600 transition duration-300 rounded-full p-2 ${lang === 'ar' ? 'rtl-language' : ''}`}
              >
                <Globe className="h-5 w-5" />
                <span className="ml-2 font-medium">{lang === 'en' ? 'عربي' : 'English'}</span>
              </button>
            </div>
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden bg-white px-4 py-2 flex flex-col space-y-2">
            {t.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gold-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="py-20 text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
          <div className="container mx-auto px-4 bg-white bg-opacity-80 py-16 rounded-lg shadow-2xl">
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800">{t.hero.title}</h1>
            <p className="text-xl mb-8 text-gray-600">{t.hero.subtitle}</p>
            <button onClick={openCalendly} className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              {t.hero.cta}
            </button>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedService(service)}
                >
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="h-12 w-12 mx-auto mb-4 text-gold-500">
                      {React.createElement(serviceIcons[index % serviceIcons.length], { size: 48 })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
              <h3 className="text-2xl font-semibold mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 mb-6">{selectedService.longDescription}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                {t.services.modalClose}
              </button>
            </div>
          </div>
        )}

        <section id="gallery" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.gallery.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              ].map((src, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600 italic">{testimonial.text}</p>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.booking.title}</h2>
            <p className="text-xl mb-8 text-gray-600">{t.booking.subtitle}</p>
            <button onClick={openCalendly} className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              {t.booking.button}
            </button>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.contact.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  sendWhatsAppMessage(new FormData(e.currentTarget));
                }}>
                  <input type="text" name="name" placeholder={t.contact.form.name} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" required />
                  <textarea name="message" placeholder={t.contact.form.message} rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" required></textarea>
                  <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105">
                    {t.contact.form.send}
                  </button>
                </form>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <Phone className="h-6 w-6 text-gold-500" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <Mail className="h-6 w-6 text-gold-500" />
                  <span className="text-gray-600">info@elegancemd.com</span>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <MapPin className="h-6 w-6 text-gold-500" />
                  <span className="text-gray-600">123 Luxury Lane, Elegance City, EC 12345</span>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.contact.info.hours}</h3>
                  <p className="text-gray-600">{t.contact.info.weekdays}</p>
                  <p className="text-gray-600">{t.contact.info.saturday}</p>
                  <p className="text-gray-600">{t.contact.info.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">EleganceMD</h3>
              <p className="text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">{t.footer.links}</h4>
              <ul className="space-y-2">
                {t.nav.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">{t.footer.social}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {[
                  { name: 'facebook', icon: <Facebook />, url: 'https://www.facebook.com/elegancemd' },
                  { name: 'twitter', icon: <Twitter />, url: 'https://www.twitter.com/elegancemd' },
                  { name: 'instagram', icon: <Instagram />, url: 'https://www.instagram.com/elegancemd' },
                  { name: 'linkedin', icon: <Linkedin />, url: 'https://www.linkedin.com/company/elegancemd' },
                  { name: 'youtube', icon: <Youtube />, url: 'https://www.youtube.com/channel/elegancemd' },
                ].map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 EleganceMD. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}