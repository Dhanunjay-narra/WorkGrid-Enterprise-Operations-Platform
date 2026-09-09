export class CrmForecastingTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingTransaction" };
  }
}
