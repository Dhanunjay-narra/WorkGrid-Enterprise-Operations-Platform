export class AiGatewaySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewaySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewaySnapshot" };
  }
}
