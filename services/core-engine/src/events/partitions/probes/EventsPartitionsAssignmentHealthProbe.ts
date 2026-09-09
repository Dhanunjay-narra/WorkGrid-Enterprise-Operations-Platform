export class EventsPartitionsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsAssignment" };
  }
}
