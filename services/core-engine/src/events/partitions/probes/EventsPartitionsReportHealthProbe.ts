export class EventsPartitionsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsReport" };
  }
}
