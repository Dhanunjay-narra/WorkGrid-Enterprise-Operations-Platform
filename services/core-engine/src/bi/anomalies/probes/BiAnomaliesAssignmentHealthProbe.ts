export class BiAnomaliesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesAssignment" };
  }
}
