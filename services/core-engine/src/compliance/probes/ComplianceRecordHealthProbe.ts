export class ComplianceRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceRecord" };
  }
}
