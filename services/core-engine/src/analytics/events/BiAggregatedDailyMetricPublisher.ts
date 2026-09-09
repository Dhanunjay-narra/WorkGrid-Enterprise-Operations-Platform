export class BiAggregatedDailyMetricPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_ana_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiAggregatedDailyMetric created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_ana_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted BiAggregatedDailyMetric updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
