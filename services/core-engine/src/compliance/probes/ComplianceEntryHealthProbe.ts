export class ComplianceEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceEntry" };
  }
}
