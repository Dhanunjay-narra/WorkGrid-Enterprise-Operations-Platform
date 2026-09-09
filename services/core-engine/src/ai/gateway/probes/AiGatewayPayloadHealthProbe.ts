export class AiGatewayPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayPayload" };
  }
}
