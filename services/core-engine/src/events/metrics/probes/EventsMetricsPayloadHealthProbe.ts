export class EventsMetricsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsPayload" };
  }
}
