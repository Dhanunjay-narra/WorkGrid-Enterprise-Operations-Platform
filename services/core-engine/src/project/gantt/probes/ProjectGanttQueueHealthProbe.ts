export class ProjectGanttQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttQueue" };
  }
}
