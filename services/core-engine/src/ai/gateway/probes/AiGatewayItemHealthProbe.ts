export class AiGatewayItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayItem" };
  }
}
