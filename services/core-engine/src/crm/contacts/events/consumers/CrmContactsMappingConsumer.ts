export class CrmContactsMappingConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsMapping created event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsMapping updated event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsMapping deleted event for entity " + event.entityId + " in crm_contacts");
  }
}
