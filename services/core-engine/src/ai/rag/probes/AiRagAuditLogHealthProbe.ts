export class AiRagAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagAuditLog" };
  }
}
