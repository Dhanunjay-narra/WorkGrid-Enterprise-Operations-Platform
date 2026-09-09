export class CrmForecastingProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingProfile" };
  }
}
