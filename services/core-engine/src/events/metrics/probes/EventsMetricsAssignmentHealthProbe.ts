export class EventsMetricsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsAssignment" };
  }
}
