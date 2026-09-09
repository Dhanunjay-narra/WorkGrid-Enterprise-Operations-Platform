export interface ReorderParameters {
  averageDailyDemand: number;
  leadTimeDays: number;
  safetyStock: number;
}

export class ReorderPointEngine {
  public calculateReorderPoint(params: ReorderParameters): number {
    const leadTimeDemand = params.averageDailyDemand * params.leadTimeDays;
    return Math.ceil(leadTimeDemand + params.safetyStock);
  }

  public shouldTriggerPurchaseOrder(currentStock: number, reorderPoint: number): boolean {
    return currentStock <= reorderPoint;
  }
}
