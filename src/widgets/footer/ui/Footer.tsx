import React from 'react';
import { useTranslation } from 'react-i18next';

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.01-4.694.067-2.61.12-3.791 1.306-3.91 3.91-.057 1.21-.066 1.575-.066 4.693s.01 3.483.067 4.694c.12 2.609 1.305 3.79 3.91 3.91 1.21.056 1.575.066 4.693.066s3.483-.01 4.694-.067c2.61-.12 3.79-1.305 3.91-3.91.057-1.21.066-1.575.066-4.693s-.01-3.483-.067-4.694c-.12-2.61-1.3-3.79-3.91-3.91-1.21-.057-1.575-.066-4.693-.066zm0 2.999a4.996 4.996 0 100 9.992 4.996 4.996 0 000-9.992zm0 8.191a3.195 3.195 0 110-6.39 3.195 3.195 0 010 6.39zm6.406-8.34a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 5.889c0-1.07-.633-1.446-1.46-1.082L2.83 9.878c-1.35.59-1.332 1.511.022 1.901l4.575 1.488 10.9-6.853c.52-.332.995-.145.572.192L8.525 15.11v4.998c1.336 0 1.904-.57 2.378-1.03l2.367-2.28 4.882 3.593c.96.666 1.681.32 1.956-.83l3.05-14.75z" />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-300">
      <div className="max-w-screen-2xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h2 className="text-4xl font-bold leading-tight">{t('footer.appPromo.heading')}</h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-8">
              <a href="#"><img src="https://olcha.uz/_nuxt/appstore.BZyLL41o.svg" alt="App Store" className="h-12"/></a>
              <a href="#"><img src="https://olcha.uz/_nuxt/googleplay.CcPmyygm.svg" alt="Google Play" className="h-12"/></a>
              <a href="#"><img src="https://olcha.uz/_nuxt/app-gallery.5qhZx5qb.svg" alt="AppGallery" className="h-12"/></a>
            </div>
          </div>
          <div className="flex-1 max-w-2xl">
            <img src="https://olcha.uz/_nuxt/footer-img.DPkm53ka.png" alt="Olcha App in Phones" className="w-full"/>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-2xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-3xl font-bold text-red-500 mb-6 block">olcha</a>
            <p className="font-semibold">{t('footer.supportPhone')}</p>
            <p className="text-2xl font-bold mb-4">+998 (71) 202 202 1</p>
            <p className="flex items-start"><span className="mt-1 mr-2">⚯</span>{t('footer.address')}</p>
            <p className="flex items-center mt-2"><span className="mr-2">✉</span>{t('footer.email')}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-500 mb-4">{t('footer.information')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.vacancies')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.publicOffer')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.returns')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.installmentTerms')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-transparent mb-4">.</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">{t('footer.ecoFriendly')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.privacyPolicy')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.paymentAndDelivery')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.bonuses')}</a></li>
              <li><a href="#" className="hover:text-red-500">{t('footer.sellerOffer')}</a></li>
            </ul>
          </div>
          
          <div>
            <div className="grid grid-cols-3 gap-2">
              <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center">
                <img src="https://olcha.uz/_nuxt/uzumbank.BHyRM-1y.svg" alt="Uzum Bank" className="h-8"/>
              </a>
              <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center">
                <img src="https://olcha.uz/_nuxt/click.ByhH4ulA.svg" alt="Click" className="h-8"/>
              </a>
              <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center">
                <img src="https://olcha.uz/_nuxt/payme.DLp2GdHd.svg" alt="PayMe" className="h-8"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-6 my-4 md:my-0">
            <a href="#" className="hover:text-red-500">{t('footer.publicOffer')}</a>
            <a href="#" className="hover:text-red-500">{t('footer.privacyPolicyLink')}</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500"><FacebookIcon /></a>
            <a href="#" className="hover:text-red-500"><InstagramIcon /></a>
            <a href="#" className="hover:text-red-500"><TelegramIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;