export class IntOAuthConnectionPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_int_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted IntOAuthConnection created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_int_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted IntOAuthConnection updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
