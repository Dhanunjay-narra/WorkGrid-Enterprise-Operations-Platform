export interface PrjSubtaskEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjSubtaskEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
