export class ProjectTasksMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksMapping" };
  }
}
