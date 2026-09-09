import { Deal, UUID } from '@nexora/types';

export class CRMEngine {
  private deals = new Map<UUID, Deal>();

  public createDeal(tenantId: UUID, title: string, amount: number): Deal {
    const deal: Deal = {
      id: 'deal_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      title,
      amount,
      stage: 'PROSPECT',
      probability: 20
    };
    this.deals.set(deal.id, deal);
    return deal;
  }

  public advanceStage(dealId: UUID, stage: Deal['stage']): Deal | null {
    const deal = this.deals.get(dealId);
    if (!deal) return null;
    deal.stage = stage;
    const probMap: Record<Deal['stage'], number> = {
      PROSPECT: 20,
      QUALIFICATION: 40,
      PROPOSAL: 60,
      NEGOTIATION: 80,
      CLOSED_WON: 100,
      CLOSED_LOST: 0
    };
    deal.probability = probMap[stage];
    return deal;
  }

  public calculatePipelineForecast(tenantId: UUID): { totalWeighted: number; totalDeals: number } {
    let totalWeighted = 0;
    let count = 0;
    for (const d of this.deals.values()) {
      if (d.tenantId === tenantId) {
        totalWeighted += (d.amount * d.probability) / 100;
        count++;
      }
    }
    return { totalWeighted, totalDeals: count };
  }
}
