export interface BiDataSourceEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class BiDataSourceEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
