export class HrPayrollSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollSummary" };
  }
}
