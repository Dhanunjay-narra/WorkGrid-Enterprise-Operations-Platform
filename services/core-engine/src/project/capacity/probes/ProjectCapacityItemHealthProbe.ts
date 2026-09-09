export class ProjectCapacityItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityItem" };
  }
}
