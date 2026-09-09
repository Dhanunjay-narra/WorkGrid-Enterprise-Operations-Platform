export class EventsPartitionsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsQueue" };
  }
}
