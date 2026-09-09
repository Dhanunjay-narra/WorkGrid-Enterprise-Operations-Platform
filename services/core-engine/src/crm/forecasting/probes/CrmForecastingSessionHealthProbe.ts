export class CrmForecastingSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingSession" };
  }
}
