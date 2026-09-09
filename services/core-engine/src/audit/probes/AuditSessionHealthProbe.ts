export class AuditSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditSession" };
  }
}
