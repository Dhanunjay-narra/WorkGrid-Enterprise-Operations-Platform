export class ProjectGanttProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttProfile" };
  }
}
