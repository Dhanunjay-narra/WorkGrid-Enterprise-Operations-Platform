export class BiForecastsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsSnapshot" };
  }
}
