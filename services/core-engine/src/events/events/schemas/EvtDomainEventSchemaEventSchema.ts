export interface EvtDomainEventSchemaEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class EvtDomainEventSchemaEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
