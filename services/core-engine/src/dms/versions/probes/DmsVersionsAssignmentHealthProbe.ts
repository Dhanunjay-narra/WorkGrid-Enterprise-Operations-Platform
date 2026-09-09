export class DmsVersionsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsAssignment" };
  }
}
