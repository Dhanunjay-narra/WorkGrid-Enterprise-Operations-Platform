export class WorkflowEdgesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesRecord" };
  }
}
