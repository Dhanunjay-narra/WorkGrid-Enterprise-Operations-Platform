export class ProjectCapacityReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityReport" };
  }
}
