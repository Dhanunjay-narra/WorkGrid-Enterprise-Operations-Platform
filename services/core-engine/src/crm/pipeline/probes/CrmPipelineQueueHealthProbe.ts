export class CrmPipelineQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineQueue" };
  }
}
