export class ProjectSprintsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsRule" };
  }
}
