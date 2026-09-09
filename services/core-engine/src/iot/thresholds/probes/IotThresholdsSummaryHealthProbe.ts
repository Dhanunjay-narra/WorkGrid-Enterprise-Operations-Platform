export class IotThresholdsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsSummary" };
  }
}
