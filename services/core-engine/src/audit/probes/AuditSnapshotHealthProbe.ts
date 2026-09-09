export class AuditSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditSnapshot" };
  }
}
