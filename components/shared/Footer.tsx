import { GithubButton, TwitterButton, TelegramButton } from './SocialButton'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div
      id=""
      className=""
    >

      <p>Hey</p>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="FinanceThrift"
        options={{height: 400}}
        theme={'dark'}
      />

    </div>
  )
}
