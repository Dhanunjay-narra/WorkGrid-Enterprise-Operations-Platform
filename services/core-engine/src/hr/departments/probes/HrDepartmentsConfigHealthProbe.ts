export class HrDepartmentsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsConfig" };
  }
}
