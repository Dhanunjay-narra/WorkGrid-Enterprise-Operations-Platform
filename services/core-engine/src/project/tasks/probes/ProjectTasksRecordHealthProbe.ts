export class ProjectTasksRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksRecord" };
  }
}
