export class AiGatewayStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayState" };
  }
}
