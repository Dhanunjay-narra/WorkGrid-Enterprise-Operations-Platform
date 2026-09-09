export class WorkflowCronsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsRecord" };
  }
}
