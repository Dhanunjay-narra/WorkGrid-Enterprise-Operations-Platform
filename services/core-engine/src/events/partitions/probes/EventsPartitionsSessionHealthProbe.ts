export class EventsPartitionsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsSession" };
  }
}
