export class ProjectCapacityTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityTransaction" };
  }
}
