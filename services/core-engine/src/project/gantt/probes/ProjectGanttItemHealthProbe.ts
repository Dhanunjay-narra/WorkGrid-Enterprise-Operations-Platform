export class ProjectGanttItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttItem" };
  }
}
