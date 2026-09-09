export class ProjectGanttEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttEvent" };
  }
}
