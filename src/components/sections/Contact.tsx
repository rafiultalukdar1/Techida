import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { SECTION_INTRO, MAP_EMBED_URL, contactDetails } from '../../data/content'
import { contactSchema, type ContactFormValues } from '../../lib/contactSchema'
import { reveal } from '../../lib/motion'
import { Container } from '../ui/Container'
import { RippleButton } from '../ui/RippleButton'
import { SectionIntro } from '../ui/SectionIntro'

const columnPadding = 'pt-[55px] max-2xl:pt-10 max-xl:pt-[35px] max-lg:pt-[30px] max-sm:pt-5'

const fieldClass =
  'mt-[22px] block w-full rounded-[4px] border border-transparent bg-panel px-5 py-[18px] text-[14px] text-para outline-none transition-[border-color,box-shadow] duration-250 placeholder:text-para placeholder:opacity-70 hover:border-white/10 focus:border-[#1fa84f7c] focus:shadow-[0_0_0_2px_rgba(31,168,79,0.2)] max-xl:mt-[15px] lg:max-xl:py-[15px] md:max-lg:py-[18px] max-md:px-[15px] sm:max-md:py-[15px] max-sm:py-3'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <span role="alert" className="block text-[14px] font-normal text-[#ff0000]">
      {message}
    </span>
  )
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', subject: '', email: '', message: '' },
  })

  const onSubmit: SubmitHandler<ContactFormValues> = () => {
    window.alert('Form submitted successfully!')
    reset()
  }

  return (
    <motion.form noValidate onSubmit={handleSubmit(onSubmit)} {...reveal('up')}>
      <div className="sm:flex sm:gap-[15px]">
        <div className="sm:flex-1">
          <input type="text" placeholder="name" aria-invalid={Boolean(errors.name)} className={fieldClass} {...register('name')} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="sm:flex-1">
          <input
            type="text"
            placeholder="subject"
            aria-invalid={Boolean(errors.subject)}
            className={fieldClass}
            {...register('subject')}
          />
          <FieldError message={errors.subject?.message} />
        </div>
      </div>
      <input type="email" placeholder="email" aria-invalid={Boolean(errors.email)} className={fieldClass} {...register('email')} />
      <FieldError message={errors.email?.message} />
      <textarea
        rows={3}
        placeholder="massage"
        aria-invalid={Boolean(errors.message)}
        className={`${fieldClass} min-h-[140px] resize-y`}
        {...register('message')}
      />
      <FieldError message={errors.message?.message} />
      <button type="submit" className="mt-[25px] block cursor-pointer border-none bg-transparent">
        <RippleButton>join now</RippleButton>
      </button>
    </motion.form>
  )
}

const detailText = 'text-[20px] font-bold capitalize max-md:text-[18px] max-sm:text-base'

export function Contact() {
  return (
    <section className="py-[70px] max-lg:py-[50px] max-sm:py-[35px]">
      <Container>
        <SectionIntro
          label="contact"
          title="contact us for Any Questions"
          description={SECTION_INTRO}
          paragraphClassName="pt-[15px] max-md:pt-[9px]"
          breakClassName="max-lg:hidden"
        />
        <div className="grid gap-x-6 lg:grid-cols-2">
          <motion.div className={columnPadding} {...reveal('up')}>
            <h4 className="pb-[10px] text-[28px] font-bold capitalize max-md:pb-[5px] max-md:text-[24px] max-sm:text-[22px]">
              contact info:
            </h4>
            <ul>
              {contactDetails.map(({ icon: Icon, text, href }) => (
                <motion.li
                  key={text}
                  className={`block pt-8 text-para max-lg:pt-5 max-md:pt-4 max-sm:pt-[15px] ${detailText}`}
                  {...reveal('up')}
                >
                  <Icon className="mr-[15px] inline text-[26px] text-primary max-md:mr-[10px] max-md:text-[22px] max-sm:mr-[7px] max-sm:text-[20px]" />
                  {href ? (
                    <a href={href} className={`${detailText} text-para hover:underline`}>
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className={columnPadding}>
            <ContactForm />
          </div>
        </div>
        <motion.div className="pt-[70px] max-lg:pt-[50px] max-sm:pt-[35px]" {...reveal('up')}>
          <iframe
            title="Office location"
            src={MAP_EMBED_URL}
            className="h-[400px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </section>
  )
}
