export class CrmForecastingRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingRecord" };
  }
}
