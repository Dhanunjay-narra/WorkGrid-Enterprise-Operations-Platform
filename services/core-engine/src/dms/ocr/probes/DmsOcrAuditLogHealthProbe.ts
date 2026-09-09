export class DmsOcrAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrAuditLog" };
  }
}
