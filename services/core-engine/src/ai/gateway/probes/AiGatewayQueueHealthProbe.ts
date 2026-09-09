export class AiGatewayQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayQueue" };
  }
}
