import { Lead } from '@nexora/types';

export interface LeadEnrichmentProfile {
  companyEmployeeCount: number;
  annualRevenue: number;
  industry: string;
  hasEnterpriseDomain: boolean;
  pageViewsLastWeek: number;
  downloadedWhitepaper: boolean;
}

export class LeadScoringEngine {
  public calculateScore(lead: Lead, profile: LeadEnrichmentProfile): number {
    let score = 20; // Base score

    // Size scoring
    if (profile.companyEmployeeCount > 500) score += 30;
    else if (profile.companyEmployeeCount > 100) score += 20;
    else if (profile.companyEmployeeCount > 20) score += 10;

    // Revenue scoring
    if (profile.annualRevenue > 10000000) score += 25;
    else if (profile.annualRevenue > 2000000) score += 15;

    // Intent & Engagement scoring
    if (profile.hasEnterpriseDomain) score += 10;
    if (profile.downloadedWhitepaper) score += 15;
    if (profile.pageViewsLastWeek > 5) score += 10;

    // Source weighting
    if (lead.source === 'REFERRAL') score += 15;
    else if (lead.source === 'CONFERENCE') score += 10;

    return Math.min(100, Math.max(0, score));
  }
}
