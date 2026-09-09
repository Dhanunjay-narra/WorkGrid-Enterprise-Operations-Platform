export class AuditPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditPolicy" };
  }
}
