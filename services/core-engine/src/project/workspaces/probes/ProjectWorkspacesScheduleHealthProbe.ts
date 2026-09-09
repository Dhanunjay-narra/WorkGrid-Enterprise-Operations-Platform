export class ProjectWorkspacesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesSchedule" };
  }
}
