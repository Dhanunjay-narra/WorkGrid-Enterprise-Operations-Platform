export class CrmForecastingSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingSnapshot" };
  }
}
