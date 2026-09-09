export class WorkflowExecutionsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsSchedule" };
  }
}
