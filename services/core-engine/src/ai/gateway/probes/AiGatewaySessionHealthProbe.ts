export class AiGatewaySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewaySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewaySession" };
  }
}
