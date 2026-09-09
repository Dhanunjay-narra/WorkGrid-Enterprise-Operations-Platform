export interface HrSkillMatrixEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrSkillMatrixEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
