import { HeadlessAbout } from '@/components/headless/HeadlessAbout'
import { AboutUI } from '@/pages/ui/AboutUI'

/**
 * ROUTE COMPONENT - About
 * 
 * This component only connects HeadlessAbout with AboutUI.
 * All logic is in HeadlessAbout and presentation in AboutUI.
 */

const About = () => {
  return (
    <HeadlessAbout>
      {(logic) => <AboutUI logic={logic} />}
    </HeadlessAbout>
  )
}

export default About