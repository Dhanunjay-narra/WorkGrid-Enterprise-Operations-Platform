export class ProjectGanttTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttTask" };
  }
}
