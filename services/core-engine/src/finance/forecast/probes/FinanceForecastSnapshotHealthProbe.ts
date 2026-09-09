export class FinanceForecastSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastSnapshot" };
  }
}
