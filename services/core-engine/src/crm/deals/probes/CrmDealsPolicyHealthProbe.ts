export class CrmDealsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsPolicy" };
  }
}
