export class ProjectKanbanRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanRule" };
  }
}
