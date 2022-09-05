import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

function FeaturesWorld({ darkM, language }) {
  const { t } = useTranslation('world')
  return (
    <>
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-8"></div>
      <section
        id="about"
        style={
          darkM
            ? {
                background:
                  'linear-gradient(180deg, rgba(46, 46, 51, 0.32) 0%, rgba(46, 46, 51, 0.0001) 100%)',
              }
            : {}
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center py-8">
              <h1 className="h2 mb-4 !font-normal font-xl font-header">
                {t('heading')}
              </h1>
              <p className="text-xl text-gray-600 black-text">{t('info')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesWorld
