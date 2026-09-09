export class AiGatewayEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayEvent" };
  }
}
