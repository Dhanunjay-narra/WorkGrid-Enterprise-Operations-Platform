export class AiGatewayBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayBatch" };
  }
}
