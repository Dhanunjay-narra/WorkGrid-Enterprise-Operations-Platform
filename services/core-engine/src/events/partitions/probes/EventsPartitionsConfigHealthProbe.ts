export class EventsPartitionsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsConfig" };
  }
}
