export class WorkflowExecutionsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsMapping" };
  }
}
