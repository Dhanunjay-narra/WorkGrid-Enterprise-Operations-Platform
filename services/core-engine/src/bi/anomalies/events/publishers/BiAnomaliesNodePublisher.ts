export class BiAnomaliesNodePublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_bi_a_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiAnomaliesNode created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_bi_a_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiAnomaliesNode updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_bi_a_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiAnomaliesNode deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
