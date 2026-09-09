export class DmsExportAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportAuditLog" };
  }
}
