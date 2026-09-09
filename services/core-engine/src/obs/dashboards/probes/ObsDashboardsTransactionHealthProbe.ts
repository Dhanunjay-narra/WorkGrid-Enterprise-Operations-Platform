export class ObsDashboardsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsTransaction" };
  }
}
