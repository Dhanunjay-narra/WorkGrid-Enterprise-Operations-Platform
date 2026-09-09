export interface CrmNoteEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CrmNoteEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
