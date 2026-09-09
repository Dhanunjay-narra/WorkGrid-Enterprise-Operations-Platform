export class EventsPartitionsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsItem" };
  }
}
