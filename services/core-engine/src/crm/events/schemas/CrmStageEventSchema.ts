export interface CrmStageEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmStageEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
