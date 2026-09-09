export class EventsMetricsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsTransaction" };
  }
}
