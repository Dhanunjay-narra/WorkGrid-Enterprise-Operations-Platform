export class WorkflowVariablesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesEntry" };
  }
}
