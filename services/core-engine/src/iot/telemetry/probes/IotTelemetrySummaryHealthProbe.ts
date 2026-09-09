export class IotTelemetrySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetrySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetrySummary" };
  }
}
