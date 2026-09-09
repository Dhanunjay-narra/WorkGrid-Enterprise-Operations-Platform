export class ProjectCapacityTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityTask" };
  }
}
