export class ProjectSprintsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsReport" };
  }
}
