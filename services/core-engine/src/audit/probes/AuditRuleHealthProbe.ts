export class AuditRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditRule" };
  }
}
