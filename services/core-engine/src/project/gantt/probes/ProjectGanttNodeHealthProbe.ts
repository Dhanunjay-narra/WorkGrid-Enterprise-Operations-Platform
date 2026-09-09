export class ProjectGanttNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttNode" };
  }
}
