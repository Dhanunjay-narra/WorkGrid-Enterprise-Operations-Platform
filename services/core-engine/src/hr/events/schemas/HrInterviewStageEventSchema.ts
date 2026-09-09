export interface HrInterviewStageEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class HrInterviewStageEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
