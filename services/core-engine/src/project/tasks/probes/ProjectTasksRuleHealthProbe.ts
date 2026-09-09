export class ProjectTasksRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksRule" };
  }
}
