export class WorkflowDagScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagSchedule" };
  }
}
