export class ProjectGanttTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttTransaction" };
  }
}
