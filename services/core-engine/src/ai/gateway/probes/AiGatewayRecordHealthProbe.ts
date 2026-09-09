export class AiGatewayRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayRecord" };
  }
}
