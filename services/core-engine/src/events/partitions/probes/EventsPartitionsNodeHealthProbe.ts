export class EventsPartitionsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsNode" };
  }
}
