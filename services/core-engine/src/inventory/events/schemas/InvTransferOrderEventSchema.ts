export interface InvTransferOrderEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvTransferOrderEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
