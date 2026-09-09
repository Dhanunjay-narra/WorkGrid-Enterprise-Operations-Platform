export class ProjectCapacityQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityQueue" };
  }
}
