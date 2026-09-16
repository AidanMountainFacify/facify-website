import ContactSection from '../components/ContactSection'

// The standalone Contact page is currently unrouted — the contact form
// lives inline on the home page instead. Kept so the page can be
// restored by re-adding its route in App.jsx.
export default function Contact() {
  return <ContactSection />
}
