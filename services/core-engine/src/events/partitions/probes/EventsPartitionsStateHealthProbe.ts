export class EventsPartitionsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsState" };
  }
}
