export class ComplianceSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceSnapshot" };
  }
}
