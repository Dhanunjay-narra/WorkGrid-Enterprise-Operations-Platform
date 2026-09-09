export class CrmHealthTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmHealthTransaction created event for entity " + event.entityId + " in crm_health");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmHealthTransaction updated event for entity " + event.entityId + " in crm_health");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmHealthTransaction deleted event for entity " + event.entityId + " in crm_health");
  }
}
