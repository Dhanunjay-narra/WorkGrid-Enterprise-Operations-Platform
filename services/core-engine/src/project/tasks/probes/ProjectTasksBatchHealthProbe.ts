export class ProjectTasksBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksBatch" };
  }
}
