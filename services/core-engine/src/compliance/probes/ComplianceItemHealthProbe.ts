export class ComplianceItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceItem" };
  }
}
