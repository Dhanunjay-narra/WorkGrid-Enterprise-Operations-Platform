export interface EvtStreamSnapshotEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtStreamSnapshotEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
