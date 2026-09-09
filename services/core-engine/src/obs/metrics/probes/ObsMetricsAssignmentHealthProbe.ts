export class ObsMetricsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsAssignment" };
  }
}
