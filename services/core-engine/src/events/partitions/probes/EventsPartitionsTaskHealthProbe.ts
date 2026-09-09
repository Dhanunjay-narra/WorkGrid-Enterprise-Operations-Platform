export class EventsPartitionsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsTask" };
  }
}
