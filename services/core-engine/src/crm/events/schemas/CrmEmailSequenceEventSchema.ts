export interface CrmEmailSequenceEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmEmailSequenceEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
