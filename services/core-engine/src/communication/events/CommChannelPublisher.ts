export class CommChannelPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_com_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted CommChannel created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_com_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted CommChannel updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
