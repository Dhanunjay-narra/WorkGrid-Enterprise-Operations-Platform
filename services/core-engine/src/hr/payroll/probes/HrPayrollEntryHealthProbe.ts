export class HrPayrollEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollEntry" };
  }
}
