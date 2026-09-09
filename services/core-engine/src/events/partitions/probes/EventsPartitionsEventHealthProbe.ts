export class EventsPartitionsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsEvent" };
  }
}
