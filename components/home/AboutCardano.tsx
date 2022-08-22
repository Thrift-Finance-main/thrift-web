import Image from 'next/image'
export const AboutCardano: React.FC = () => {
  return (
    <section id="cardano" className="features py-36 mx-auto">
      <div className="container mx-auto pl-6 sm:pl-0 pr-6 sm:pr-0">
        <h2 className="section-heading mb-10" data-aos="fade-down">
          About Cardano
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch gap-8">

        </div>
      </div>
    </section>
  )
}

// @ts-ignore
const Card = ({ image, title, children, ...rest }) => {
  return (
    <div
      className="bg-main text-dark p-10 shadow-md rounded-md relative w-full lg:w-1/3"
      {...rest}
    >
      <Image className="mb-4 " src={image} alt="icon" />

      <h3 className="text-3xl mb-4">{title}</h3>
      <p>{children}</p>
    </div>
  )
}
