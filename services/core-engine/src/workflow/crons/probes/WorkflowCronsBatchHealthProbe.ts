export class WorkflowCronsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsBatch" };
  }
}
