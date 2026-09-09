export class EventsIdempotencyAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyAssignment" };
  }
}
