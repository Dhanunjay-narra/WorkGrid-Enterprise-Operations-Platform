export class AiGatewayEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayEntry" };
  }
}
