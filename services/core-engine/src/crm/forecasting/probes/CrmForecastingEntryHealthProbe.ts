export class CrmForecastingEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingEntry" };
  }
}
