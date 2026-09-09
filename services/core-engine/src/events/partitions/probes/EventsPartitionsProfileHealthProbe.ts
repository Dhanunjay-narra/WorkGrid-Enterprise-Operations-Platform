export class EventsPartitionsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsProfile" };
  }
}
