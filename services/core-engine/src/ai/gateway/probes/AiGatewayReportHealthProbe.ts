export class AiGatewayReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayReport" };
  }
}
