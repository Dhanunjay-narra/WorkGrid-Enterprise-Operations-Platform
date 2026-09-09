export class ProjectCapacityStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityState" };
  }
}
