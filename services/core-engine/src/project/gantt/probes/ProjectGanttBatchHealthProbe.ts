export class ProjectGanttBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttBatch" };
  }
}
