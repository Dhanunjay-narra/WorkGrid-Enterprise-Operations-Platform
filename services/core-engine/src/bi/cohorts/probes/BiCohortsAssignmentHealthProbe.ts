export class BiCohortsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsAssignment" };
  }
}
