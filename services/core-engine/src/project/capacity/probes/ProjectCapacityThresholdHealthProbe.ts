export class ProjectCapacityThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityThreshold" };
  }
}
