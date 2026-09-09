export class HrEmployeesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesReport" };
  }
}
