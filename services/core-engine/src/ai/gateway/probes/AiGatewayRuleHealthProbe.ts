export class AiGatewayRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayRule" };
  }
}
