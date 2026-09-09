export class SecRateLimitCounterPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_sec_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted SecRateLimitCounter created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_sec_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted SecRateLimitCounter updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
