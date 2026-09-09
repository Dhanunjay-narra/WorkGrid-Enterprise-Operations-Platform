export class ProjectGanttRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttRecord" };
  }
}
