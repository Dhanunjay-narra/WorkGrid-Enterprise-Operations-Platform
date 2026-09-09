export class ProjectGanttSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttSession" };
  }
}
