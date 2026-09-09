export class ProjectCapacityConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityConfig" };
  }
}
