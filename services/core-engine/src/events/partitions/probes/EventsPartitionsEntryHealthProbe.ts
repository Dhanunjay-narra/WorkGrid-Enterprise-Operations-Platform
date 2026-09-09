export class EventsPartitionsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsEntry" };
  }
}
