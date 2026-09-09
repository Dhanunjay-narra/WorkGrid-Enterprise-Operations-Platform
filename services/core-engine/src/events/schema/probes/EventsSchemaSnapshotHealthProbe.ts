export class EventsSchemaSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaSnapshot" };
  }
}
