import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from './NewsletterForm'

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL =
    'https://finance.us20.list-manage.com/subscribe/post?u=980ba315fb0bd313489501daf&id=7775d4c80c&f_id=0048fae6f0'
  // alert(MAILCHIMP_URL)
  // alert(MAILCHIMP_URL)

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {}
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )
      }}
    />
  )
}

export default NewsletterSubscribe
