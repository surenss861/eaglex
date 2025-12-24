/**
 * Utility functions for the EagleX Logistics website
 */

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (North American format)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 || cleaned.length === 11
}

