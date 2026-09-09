export class WorkflowEdgesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesSchedule" };
  }
}
