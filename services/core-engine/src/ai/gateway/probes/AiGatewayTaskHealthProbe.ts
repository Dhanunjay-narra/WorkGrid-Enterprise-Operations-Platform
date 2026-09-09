export class AiGatewayTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayTask" };
  }
}
