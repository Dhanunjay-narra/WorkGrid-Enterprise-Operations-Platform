export interface HrPerformanceReviewEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrPerformanceReviewEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
