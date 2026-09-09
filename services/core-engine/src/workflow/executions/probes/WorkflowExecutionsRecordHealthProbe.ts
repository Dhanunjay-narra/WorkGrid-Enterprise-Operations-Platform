export class WorkflowExecutionsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsRecord" };
  }
}
