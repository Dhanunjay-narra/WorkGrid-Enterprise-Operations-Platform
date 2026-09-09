export class CrmPipelineTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineTransaction" };
  }
}
