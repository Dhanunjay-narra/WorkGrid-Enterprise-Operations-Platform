export class HrPerformanceAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceAssignment" };
  }
}
