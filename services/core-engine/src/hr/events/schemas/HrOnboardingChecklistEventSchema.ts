export interface HrOnboardingChecklistEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrOnboardingChecklistEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
