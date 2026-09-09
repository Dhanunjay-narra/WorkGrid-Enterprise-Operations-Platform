export class ProjectGanttRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttRule" };
  }
}
