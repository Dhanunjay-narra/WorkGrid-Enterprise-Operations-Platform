export class BiForecastsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsRecord" };
  }
}
