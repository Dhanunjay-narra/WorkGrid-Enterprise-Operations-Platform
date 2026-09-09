export class EventsReplayReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayReport" };
  }
}
