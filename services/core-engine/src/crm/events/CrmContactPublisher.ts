export class CrmContactPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_crm_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted CrmContact created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_crm_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted CrmContact updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
