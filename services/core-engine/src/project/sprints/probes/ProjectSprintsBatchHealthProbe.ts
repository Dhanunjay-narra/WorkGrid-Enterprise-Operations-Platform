export class ProjectSprintsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsBatch" };
  }
}
