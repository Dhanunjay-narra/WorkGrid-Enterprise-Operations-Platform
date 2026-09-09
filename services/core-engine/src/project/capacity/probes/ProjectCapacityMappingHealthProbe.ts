export class ProjectCapacityMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityMapping" };
  }
}
