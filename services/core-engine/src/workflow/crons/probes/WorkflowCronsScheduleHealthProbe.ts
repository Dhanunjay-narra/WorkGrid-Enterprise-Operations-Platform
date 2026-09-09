export class WorkflowCronsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsSchedule" };
  }
}
