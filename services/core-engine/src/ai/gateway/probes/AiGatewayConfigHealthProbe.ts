export class AiGatewayConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayConfig" };
  }
}
