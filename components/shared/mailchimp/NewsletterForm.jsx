import { useState } from 'react'
import { decode } from 'html-entities'

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null)

    if (!email) {
      setError('Please enter a valid email address')
      return null
    }

    const isFormValidated = onValidated({ EMAIL: email })

    // On success return true
    return email && email.indexOf('@') > -1 && isFormValidated
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null)
    // alert(event.keyCode)
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      handleFormSubmit()
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null
    }
    const result = message?.split('-') ?? null
    if ('0' !== result?.[0]?.trim()) {
      return decode(message)
    }
    const formattedMessage = result?.[1]?.trim() ?? null
    return formattedMessage ? decode(formattedMessage) : null
  }

  return (
    <>
      <div data-aos="fade-down" data-aos-delay="300">
        {!(status === 'success' && status !== 'error' && !error) && (
          <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
            <input
              type="email"
              onChange={(event) => setEmail(event?.target?.value ?? '')}
              onKeyUp={(event) => handleInputKeyEvent(event)}
              className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
              placeholder="Enter Email Address.."
              aria-label="email address"
            />
            <span
              className="btn text-white bg-purpled hover:opacity-80 shrink-0 cursor-pointer"
              onClick={handleFormSubmit}
            >
              {' '}
              Join Waitlist{' '}
            </span>
          </div>
        )}
        {/* Success message */}
        {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
        <div className="newsletter-form-info">
          {status === 'sending' && <div>Sending...</div>}
          {status === 'error' || error ? (
            <div
              className="newsletter-form-error"
              dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
            />
          ) : null}
          {status === 'success' && status !== 'error' && !error && (
            // <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
            <p>thank you and confirmation text</p>
          )}
        </div>
      </div>
    </>
  )
}

export default NewsletterForm
