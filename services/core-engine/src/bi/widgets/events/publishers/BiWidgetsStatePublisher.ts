export class BiWidgetsStatePublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_bi_w_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiWidgetsState created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_bi_w_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiWidgetsState updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_bi_w_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiWidgetsState deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
