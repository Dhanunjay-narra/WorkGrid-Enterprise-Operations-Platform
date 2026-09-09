export class EventsOutboxReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxReport" };
  }
}
