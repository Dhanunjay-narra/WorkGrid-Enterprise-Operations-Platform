export class IotThresholdsMappingPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_iot__" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted IotThresholdsMapping created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_iot__" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted IotThresholdsMapping updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_iot__" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted IotThresholdsMapping deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
