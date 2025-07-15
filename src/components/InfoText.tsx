import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoText: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-6 space-y-8 text-gray-700">
            <div>
                <h2 className="text-3xl font-bold mb-4">{t('infoText.section1.heading')}</h2>
                <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: t('infoText.section1.paragraph') }} />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">{t('infoText.section2.heading')}</h2>
                <p className="text-base leading-relaxed">{t('infoText.section2.paragraph')}</p>
                <a href="#" className="text-red-500 font-semibold mt-4 inline-block border-b-2 border-red-500 hover:border-red-600 transition">{t('common.showAll')}</a>
            </div>
        </div>
    );
};

export default InfoText;