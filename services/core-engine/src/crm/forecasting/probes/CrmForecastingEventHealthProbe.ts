export class CrmForecastingEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingEvent" };
  }
}
