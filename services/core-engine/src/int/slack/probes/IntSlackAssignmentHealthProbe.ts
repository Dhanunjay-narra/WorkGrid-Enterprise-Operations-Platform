export class IntSlackAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackAssignment" };
  }
}
