export interface HrJobPostingEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrJobPostingEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
