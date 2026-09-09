export class WorkflowDagMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagMapping" };
  }
}
