import { ReactNode } from 'react'

/**
 * HEADLESS COMPONENT - About
 * 
 * Contains all business logic for the About page.
 * This component is FORBIDDEN to modify by AI agents.
 */

export interface UseAboutLogicReturn {
  // Add any business logic here if needed in the future
}

interface HeadlessAboutProps {
  children: (logic: UseAboutLogicReturn) => ReactNode
}

export const HeadlessAbout = ({ children }: HeadlessAboutProps) => {
  const logic: UseAboutLogicReturn = {
    // Business logic goes here
  }

  return <>{children(logic)}</>
}