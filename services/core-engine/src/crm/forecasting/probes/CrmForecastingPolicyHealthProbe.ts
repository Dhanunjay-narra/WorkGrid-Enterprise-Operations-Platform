export class CrmForecastingPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingPolicy" };
  }
}
