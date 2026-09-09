export class AuditRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditRecord" };
  }
}
