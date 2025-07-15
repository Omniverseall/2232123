// File: src/components/Footer.tsx
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

const AlifIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="46" fill="#1F3E79" viewBox="0 0 130 46">
        <path d="M54.318 34.482V11.95h9.58c1.485 0 2.843.344 4.073 1.03a7.87 7.87 0 012.992 2.865c.742 1.202 1.114 2.597 1.114 4.185 0 1.587-.372 3.004-1.114 4.248a7.939 7.939 0 01-2.96 2.865c-1.23.687-2.6 1.03-4.105 1.03h-4.233v6.309h-5.347zm5.347-10.847h3.628c.636 0 1.21-.14 1.718-.419.51-.279.924-.687 1.242-1.223.318-.536.477-1.18.477-1.931 0-.751-.16-1.395-.477-1.932a3.186 3.186 0 00-1.273-1.223c-.51-.3-1.072-.45-1.687-.45h-3.628v7.178zm15.039 10.847V10.985h4.933v23.497h-4.933zm16.725.386c-1.677 0-3.13-.322-4.36-.965-1.21-.666-2.143-1.556-2.801-2.672-.658-1.137-.986-2.393-.986-3.766V17.97h4.932v9.366c0 .58.138 1.116.414 1.61.276.472.647.858 1.114 1.159.488.278 1.04.418 1.655.418.594 0 1.124-.14 1.59-.418.489-.301.87-.687 1.147-1.16.275-.493.413-1.03.413-1.609V17.97h4.933v9.495c0 1.373-.318 2.629-.955 3.766-.636 1.116-1.56 2.006-2.768 2.672-1.189.643-2.631.965-4.329.965zm11.743-.386v-9.753c0-1.352.307-2.564.923-3.637.636-1.095 1.538-1.953 2.705-2.575 1.167-.623 2.556-.934 4.169-.934.806 0 1.549.097 2.227.29a7.08 7.08 0 011.846.74 5.47 5.47 0 011.464 1.095h.064c.424-.43.912-.794 1.464-1.095a7.63 7.63 0 011.877-.74 8.479 8.479 0 012.26-.29c1.612 0 3.002.311 4.169.934 1.167.622 2.069 1.48 2.705 2.575.637 1.073.955 2.285.955 3.637v9.753h-4.965V24.89a2.62 2.62 0 00-.414-1.448 3.027 3.027 0 00-1.05-1.095 2.814 2.814 0 00-1.527-.418c-.573 0-1.093.14-1.56.418a3.043 3.043 0 00-1.05 1.095 2.78 2.78 0 00-.382 1.448v9.592h-4.933V24.89c0-.537-.138-1.02-.413-1.448a2.966 2.966 0 00-1.082-1.095 2.82 2.82 0 00-1.528-.418c-.573 0-1.093.14-1.559.418a3.038 3.038 0 00-1.051 1.095 2.79 2.79 0 00-.381 1.448v9.592h-4.933z"></path>
        <path d="M36.857.003H8.62C3.86.003 0 3.907 0 8.722v28.56C0 42.095 3.86 46 8.62 46h28.237c4.76 0 8.62-3.904 8.62-8.719V8.721c0-4.814-3.86-8.718-8.62-8.718z" fill="#2792FC"></path>
        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46" style={{ maskType: 'alpha' }}>
            <path d="M36.951 0H8.714C3.954 0 .094 3.904.094 8.719v28.56c0 4.814 3.86 8.718 8.62 8.718h28.237c4.761 0 8.62-3.904 8.62-8.719V8.718c0-4.814-3.859-8.718-8.62-8.718z" fill="#2792FC"></path>
        </mask>
        <g mask="url(#a)">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.046 22.294C4.93 30.155 2.274 39.174.83 44.873l6.03 1.563c1.394-5.503 3.86-13.785 7.525-20.884 11.748 6.28 20.75 4.982 25.304-.754 4.544-5.725 3.19-15.195-4.988-17.915-5.394-1.795-10.258-.838-14.384 1.792-3.143 2.005-5.805 4.94-8.053 8.221a76.716 76.716 0 01-5.244-3.974l-3.93 4.882a82.244 82.244 0 005.956 4.491zm8.559-2.136c10.273 5.431 15.457 2.93 17.23.697 2.293-2.888 1.284-6.874-2.079-7.993-3.48-1.157-6.425-.58-9.119 1.138-2.143 1.366-4.162 3.488-6.032 6.158z" fill="#E9FFF2"></path>
        </g>
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
                             <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center"><img src="https://olcha.uz/_nuxt/uzumbank.BHyRM-1y.svg" alt="Uzum Bank" className="h-8"/></a>
                             <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center"><AlifIcon /></a>
                             <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center"><img src="https://olcha.uz/_nuxt/click.ByhH4ulA.svg" alt="Click" className="h-8"/></a>
                             <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center"><img src="https://olcha.uz/_nuxt/payme.DLp2GdHd.svg" alt="PayMe" className="h-8"/></a>
                             <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center"><img src="https://olcha.uz/_nuxt/humo-bg.B29viszN.svg" alt="Humo" className="h-10"/></a>
                             <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center justify-center"><img src="https://olcha.uz/_nuxt/paynet.C8TMfSoa.svg" alt="Paynet" className="h-8"/></a>
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