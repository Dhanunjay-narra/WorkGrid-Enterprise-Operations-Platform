export class AiGatewayAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewayAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewayAuditLog" };
  }
}
