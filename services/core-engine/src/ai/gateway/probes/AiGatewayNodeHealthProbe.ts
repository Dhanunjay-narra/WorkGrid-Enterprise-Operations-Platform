export class AiGatewayNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayNode" };
  }
}
