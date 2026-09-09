export class AiGatewayMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayMetric" };
  }
}
