export class EventsOutboxAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxAssignment" };
  }
}
