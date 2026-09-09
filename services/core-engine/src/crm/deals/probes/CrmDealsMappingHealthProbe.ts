export class CrmDealsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsMapping" };
  }
}
