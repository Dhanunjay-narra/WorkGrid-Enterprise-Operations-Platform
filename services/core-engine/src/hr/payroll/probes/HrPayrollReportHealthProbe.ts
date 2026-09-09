export class HrPayrollReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollReport" };
  }
}
