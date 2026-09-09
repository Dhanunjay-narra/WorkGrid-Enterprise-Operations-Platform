export class CrmContactsRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsRecord created event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsRecord updated event for entity " + event.entityId + " in crm_contacts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmContactsRecord deleted event for entity " + event.entityId + " in crm_contacts");
  }
}
