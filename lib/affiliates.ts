/**
 * Centralized affiliate link management for BELLE SUISSE
 *
 * HOW TO USE:
 * 1. Sign up on Tradedoubler (tradedoubler.com) or Awin (awin.com)
 * 2. Apply to each retailer's program
 * 3. Get your tracking links
 * 4. Replace the placeholder URLs below with your real affiliate links
 * 5. Each retailer has a base URL + your tracking ID
 */

export interface AffiliateRetailer {
  id: string;
  name: string;
  baseUrl: string;
  trackingParam: string;
  affiliateId: string;
  network: 'tradedoubler' | 'awin' | 'direct' | 'none';
  commission: string;
  active: boolean;
}

// ============================================
// CONFIGURE YOUR AFFILIATE IDS HERE
// ============================================
const TRADEDOUBLER_PUBLISHER_ID = 'VOTRE_ID_TRADEDOUBLER'; // Remplacer par votre ID
const AWIN_PUBLISHER_ID = 'VOTRE_ID_AWIN'; // Remplacer par votre ID

export const retailers: Record<string, AffiliateRetailer> = {
  manor: {
    id: 'manor',
    name: 'Manor',
    baseUrl: 'https://www.manor.ch',
    trackingParam: `?tduid=${TRADEDOUBLER_PUBLISHER_ID}`,
    affiliateId: TRADEDOUBLER_PUBLISHER_ID,
    network: 'tradedoubler',
    commission: '5-7%',
    active: false, // Passer à true quand votre compte est activé
  },
  globus: {
    id: 'globus',
    name: 'Globus',
    baseUrl: 'https://www.globus.ch',
    trackingParam: `?tduid=${TRADEDOUBLER_PUBLISHER_ID}`,
    affiliateId: TRADEDOUBLER_PUBLISHER_ID,
    network: 'tradedoubler',
    commission: '5-8%',
    active: false,
  },
  marionnaud: {
    id: 'marionnaud',
    name: 'Marionnaud',
    baseUrl: 'https://www.marionnaud.ch',
    trackingParam: `?awc=${AWIN_PUBLISHER_ID}`,
    affiliateId: AWIN_PUBLISHER_ID,
    network: 'awin',
    commission: '6.3%',
    active: false,
  },
  import_parfumerie: {
    id: 'import_parfumerie',
    name: 'Import Parfumerie',
    baseUrl: 'https://www.importparfumerie.ch',
    trackingParam: `?tduid=${TRADEDOUBLER_PUBLISHER_ID}`,
    affiliateId: TRADEDOUBLER_PUBLISHER_ID,
    network: 'tradedoubler',
    commission: '4-6%',
    active: false,
  },
  coop_vitality: {
    id: 'coop_vitality',
    name: 'Coop Vitality',
    baseUrl: 'https://www.coopvitality.ch',
    trackingParam: `?tduid=${TRADEDOUBLER_PUBLISHER_ID}`,
    affiliateId: TRADEDOUBLER_PUBLISHER_ID,
    network: 'tradedoubler',
    commission: '3-5%',
    active: false,
  },
  notino: {
    id: 'notino',
    name: 'Notino',
    baseUrl: 'https://www.notino.ch',
    trackingParam: `?awc=${AWIN_PUBLISHER_ID}`,
    affiliateId: AWIN_PUBLISHER_ID,
    network: 'awin',
    commission: '5-8%',
    active: false,
  },
  parfumdreams: {
    id: 'parfumdreams',
    name: 'Parfumdreams',
    baseUrl: 'https://www.parfumdreams.ch',
    trackingParam: `?awc=${AWIN_PUBLISHER_ID}`,
    affiliateId: AWIN_PUBLISHER_ID,
    network: 'awin',
    commission: '8-12%',
    active: false,
  },
};

/**
 * Product-specific affiliate links
 * Map product names to their direct affiliate URLs
 * When you get approved, add the EXACT tracking URL from Tradedoubler/Awin here
 */
export const productLinks: Record<string, string> = {
  // LA PRAIRIE
  'Skin Caviar Luxe Cream': '', // Ajouter le lien Manor/Globus affilié
  'Cellular Cream Platinum Rare': '',

  // VALMONT
  'Prime Renewing Pack': '', // Ajouter le lien Globus affilié

  // WELEDA
  'Grenade Crème de Nuit': '', // Ajouter le lien Manor affilié
  'Skin Food': '',

  // SKINCEUTICALS
  'C.E. Ferulic': '', // Ajouter le lien Manor affilié

  // DECLARE
  'Gentle Cleanser': '', // Ajouter le lien pharmacie affilié
};

/**
 * Get the affiliate URL for a product
 * Returns the direct product link if available, otherwise falls back to retailer homepage
 */
export function getAffiliateUrl(productName: string, retailerName: string): string {
  // 1. Check if we have a direct product link
  const directLink = productLinks[productName];
  if (directLink) return directLink;

  // 2. Normalize retailer name to key
  const retailerKey = retailerName
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/é/g, 'e');

  // 3. Find retailer config
  const retailer = retailers[retailerKey];
  if (retailer && retailer.active) {
    return `${retailer.baseUrl}${retailer.trackingParam}`;
  }

  // 4. Fallback: return retailer website without tracking (no commission but good UX)
  const fallbackUrls: Record<string, string> = {
    manor: 'https://www.manor.ch/fr/beaute',
    globus: 'https://www.globus.ch/fr/beaute',
    marionnaud: 'https://www.marionnaud.ch',
    'import parfumerie': 'https://www.importparfumerie.ch',
    'coop vitality': 'https://www.coopvitality.ch',
    pharmacie: 'https://www.coopvitality.ch',
    jelmoli: 'https://www.jelmoli.ch/fr/beaute',
  };

  return fallbackUrls[retailerName.toLowerCase()] || '#';
}

/**
 * Get all active affiliate programs info (for admin/dashboard)
 */
export function getAffiliateStatus() {
  return Object.values(retailers).map((r) => ({
    name: r.name,
    network: r.network,
    commission: r.commission,
    active: r.active,
    url: r.baseUrl,
  }));
}
