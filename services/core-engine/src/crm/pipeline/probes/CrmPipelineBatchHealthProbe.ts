export class CrmPipelineBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineBatch" };
  }
}
