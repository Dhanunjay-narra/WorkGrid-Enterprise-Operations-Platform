export class AiGatewayPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayPolicy" };
  }
}
