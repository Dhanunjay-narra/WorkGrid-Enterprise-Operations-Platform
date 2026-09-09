export class AiGatewayThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayThreshold" };
  }
}
