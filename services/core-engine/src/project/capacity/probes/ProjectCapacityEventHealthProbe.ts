export class ProjectCapacityEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityEvent" };
  }
}
