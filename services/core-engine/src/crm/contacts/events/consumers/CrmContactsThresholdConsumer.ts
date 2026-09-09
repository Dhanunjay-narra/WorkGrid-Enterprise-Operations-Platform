export class CrmContactsThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsThreshold created event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsThreshold updated event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsThreshold deleted event for entity " + event.entityId + " in crm_contacts");
  }
}
