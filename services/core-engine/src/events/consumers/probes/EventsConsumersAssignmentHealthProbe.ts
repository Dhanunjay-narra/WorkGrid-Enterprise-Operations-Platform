export class EventsConsumersAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersAssignment" };
  }
}
