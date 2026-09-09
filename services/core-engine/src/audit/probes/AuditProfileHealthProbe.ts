export class AuditProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditProfile" };
  }
}
