export class AuditEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditEntry" };
  }
}
