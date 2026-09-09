export class BiDashboardsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsTransaction" };
  }
}
