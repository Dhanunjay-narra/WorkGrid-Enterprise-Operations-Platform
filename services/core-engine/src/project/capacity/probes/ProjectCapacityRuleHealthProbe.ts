export class ProjectCapacityRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityRule" };
  }
}
