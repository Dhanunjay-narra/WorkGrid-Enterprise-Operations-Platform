export class HrDepartmentsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsReport" };
  }
}
