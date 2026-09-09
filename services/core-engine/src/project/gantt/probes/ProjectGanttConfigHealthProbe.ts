export class ProjectGanttConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttConfig" };
  }
}
