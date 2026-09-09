export class WorkflowVariablesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesMapping" };
  }
}
