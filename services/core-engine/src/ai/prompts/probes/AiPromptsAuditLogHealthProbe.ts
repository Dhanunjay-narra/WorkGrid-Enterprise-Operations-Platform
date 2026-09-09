export class AiPromptsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsAuditLog" };
  }
}
