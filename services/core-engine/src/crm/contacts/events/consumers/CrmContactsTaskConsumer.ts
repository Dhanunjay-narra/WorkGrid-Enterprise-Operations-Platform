export class CrmContactsTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsTask created event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsTask updated event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsTask deleted event for entity " + event.entityId + " in crm_contacts");
  }
}
