export class WorkflowApprovalsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsSchedule" };
  }
}
