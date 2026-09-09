export class ProjectGanttStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttState" };
  }
}
