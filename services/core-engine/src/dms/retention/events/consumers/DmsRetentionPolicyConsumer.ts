export class DmsRetentionPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionPolicy created event for entity " + event.entityId + " in dms_retention");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionPolicy updated event for entity " + event.entityId + " in dms_retention");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionPolicy deleted event for entity " + event.entityId + " in dms_retention");
  }
}
