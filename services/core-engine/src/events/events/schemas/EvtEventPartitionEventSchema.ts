export interface EvtEventPartitionEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtEventPartitionEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
