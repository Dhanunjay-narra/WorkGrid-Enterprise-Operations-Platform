export class ProjectSprintsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsThreshold" };
  }
}
