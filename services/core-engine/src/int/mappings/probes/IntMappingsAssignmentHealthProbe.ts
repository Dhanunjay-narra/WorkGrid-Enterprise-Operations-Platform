export class IntMappingsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsAssignment" };
  }
}
