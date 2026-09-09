export class WorkflowVariablesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesSchedule" };
  }
}
