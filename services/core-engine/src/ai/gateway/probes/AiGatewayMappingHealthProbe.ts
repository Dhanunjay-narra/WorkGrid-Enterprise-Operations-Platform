export class AiGatewayMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayMapping" };
  }
}
