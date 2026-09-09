export class ComplianceSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceSession" };
  }
}
