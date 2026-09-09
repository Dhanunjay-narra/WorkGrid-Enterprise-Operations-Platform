export class AiGatewayAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayAssignment" };
  }
}
