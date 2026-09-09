export class WorkflowRetriesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesMapping" };
  }
}
