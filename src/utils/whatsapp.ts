/**
 * WhatsApp Helper Utilities for CraftEx Salt
 * Primary Contact Number: +92 301 5792132
 */

export const WHATSAPP_PHONE_NUMBER = '923015792132';
export const DISPLAY_PHONE_NUMBER = '+92 301 5792132';

/**
 * Builds the standard WhatsApp URL with proper encoding
 */
export function createWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedText}`;
}

/**
 * Creates standard product Buy Now WhatsApp URL
 * Example format:
 * "Hello CraftEx Salt, I am interested in buying [PRODUCT NAME]. Please share the price and order details."
 */
export function getProductWhatsAppUrl(productName: string, customDetails?: string): string {
  let message = `Hello CraftEx Salt, I am interested in buying ${productName}. Please share the price and order details.`;
  if (customDetails && customDetails.trim().length > 0) {
    message += `\n\nAdditional notes: ${customDetails.trim()}`;
  }
  return createWhatsAppUrl(message);
}

/**
 * General inquiry WhatsApp URL
 */
export function getGeneralInquiryWhatsAppUrl(topic = 'General Inquiry'): string {
  const message = `Hello CraftEx Salt, I would like to inquire about your premium Himalayan salt products (${topic}). Please provide more information.`;
  return createWhatsAppUrl(message);
}

/**
 * Bulk / Wholesale Order WhatsApp URL
 */
export function getBulkOrderWhatsAppUrl(details?: string): string {
  const message = details 
    ? `Hello CraftEx Salt, I am interested in bulk / wholesale supply: ${details}. Please share your catalog and wholesale quotes.`
    : `Hello CraftEx Salt, I am interested in a bulk / wholesale order. Please share your wholesale price list and export/shipping details.`;
  return createWhatsAppUrl(message);
}

/**
 * Helper to safely trigger opening WhatsApp
 */
export function openWhatsApp(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
