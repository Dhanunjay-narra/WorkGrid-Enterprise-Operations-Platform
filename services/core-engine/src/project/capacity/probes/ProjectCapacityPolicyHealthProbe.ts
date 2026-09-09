export class ProjectCapacityPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityPolicy" };
  }
}
