export class AiGatewayProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayProfile" };
  }
}
