export class CrmDealsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsTransaction" };
  }
}
