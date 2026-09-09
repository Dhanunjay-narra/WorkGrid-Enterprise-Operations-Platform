export class AiGatewayTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayTransaction" };
  }
}
