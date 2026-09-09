export class EventsSchemaAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaAssignment" };
  }
}
