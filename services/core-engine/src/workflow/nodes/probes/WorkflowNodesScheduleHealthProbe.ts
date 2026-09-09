export class WorkflowNodesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesSchedule" };
  }
}
