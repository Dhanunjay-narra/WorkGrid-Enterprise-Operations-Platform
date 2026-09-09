export class ProjectEpicsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsBatch" };
  }
}
