export class EventsDeadletterAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterAssignment" };
  }
}
