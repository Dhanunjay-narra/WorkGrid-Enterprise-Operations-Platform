export class ProjectGanttThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttThreshold" };
  }
}
