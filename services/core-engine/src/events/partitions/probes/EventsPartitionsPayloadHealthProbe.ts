export class EventsPartitionsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsPayload" };
  }
}
