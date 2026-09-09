export interface CustomerEngagementMetrics {
  loginFrequencyPerWeek: number;
  openSupportTicketsCount: number;
  criticalBugsReported: number;
  featureAdoptionRate: number; // 0 to 1
  invoicePaymentDelayDays: number;
  npsRating?: number; // 0 to 10
}

export class CustomerHealthScoreEngine {
  public calculateHealthScore(metrics: CustomerEngagementMetrics): { score: number; status: 'HEALTHY' | 'AT_RISK' | 'CRITICAL' } {
    let score = 50;

    // Login Activity
    if (metrics.loginFrequencyPerWeek >= 5) score += 20;
    else if (metrics.loginFrequencyPerWeek >= 2) score += 10;
    else score -= 15;

    // Feature Adoption
    score += Math.round(metrics.featureAdoptionRate * 20);

    // Support Tickets & Bugs impact
    if (metrics.criticalBugsReported > 0) score -= metrics.criticalBugsReported * 15;
    if (metrics.openSupportTicketsCount > 3) score -= 10;

    // Payment discipline
    if (metrics.invoicePaymentDelayDays > 30) score -= 25;
    else if (metrics.invoicePaymentDelayDays > 10) score -= 10;
    else score += 5;

    // NPS
    if (metrics.npsRating !== undefined) {
      if (metrics.npsRating >= 9) score += 15;
      else if (metrics.npsRating <= 6) score -= 15;
    }

    const finalScore = Math.max(0, Math.min(100, score));

    let status: 'HEALTHY' | 'AT_RISK' | 'CRITICAL' = 'HEALTHY';
    if (finalScore < 40) status = 'CRITICAL';
    else if (finalScore < 70) status = 'AT_RISK';

    return { score: finalScore, status };
  }
}
