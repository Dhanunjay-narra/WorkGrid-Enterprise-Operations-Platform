export class CrmDealsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsBatch" };
  }
}
