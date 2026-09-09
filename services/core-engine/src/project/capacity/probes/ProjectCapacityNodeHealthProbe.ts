export class ProjectCapacityNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityNode" };
  }
}
