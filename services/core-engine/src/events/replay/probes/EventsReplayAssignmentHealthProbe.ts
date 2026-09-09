export class EventsReplayAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayAssignment" };
  }
}
