export class FinanceForecastPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastPayload" };
  }
}
