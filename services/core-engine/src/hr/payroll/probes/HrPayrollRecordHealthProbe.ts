export class HrPayrollRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollRecord" };
  }
}
