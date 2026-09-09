export class WorkflowVariablesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesRecord" };
  }
}
