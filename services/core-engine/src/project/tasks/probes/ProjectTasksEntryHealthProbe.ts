export class ProjectTasksEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksEntry" };
  }
}
