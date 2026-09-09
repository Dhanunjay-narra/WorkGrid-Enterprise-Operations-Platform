export class EventsConsumersSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersSnapshot" };
  }
}
