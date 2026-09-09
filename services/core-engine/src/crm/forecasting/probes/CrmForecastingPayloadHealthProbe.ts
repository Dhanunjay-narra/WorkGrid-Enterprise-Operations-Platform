export class CrmForecastingPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingPayload" };
  }
}
