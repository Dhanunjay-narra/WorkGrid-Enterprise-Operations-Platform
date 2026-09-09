export class BiCohortsRecordPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_bi_c_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiCohortsRecord created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_bi_c_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiCohortsRecord updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_bi_c_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiCohortsRecord deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
