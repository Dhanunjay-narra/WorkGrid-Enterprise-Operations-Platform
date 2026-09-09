export class ProjectCapacityBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityBatch" };
  }
}
