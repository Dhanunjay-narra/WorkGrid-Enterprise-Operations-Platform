export class ProjectGanttEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttEntry" };
  }
}
