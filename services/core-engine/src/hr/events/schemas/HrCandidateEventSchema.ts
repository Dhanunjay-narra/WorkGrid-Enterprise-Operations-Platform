export interface HrCandidateEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrCandidateEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
