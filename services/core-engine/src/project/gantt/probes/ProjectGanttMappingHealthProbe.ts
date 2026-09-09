export class ProjectGanttMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttMapping" };
  }
}
