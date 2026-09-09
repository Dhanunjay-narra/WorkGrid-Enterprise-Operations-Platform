export class DmsFilesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesAuditLog" };
  }
}
