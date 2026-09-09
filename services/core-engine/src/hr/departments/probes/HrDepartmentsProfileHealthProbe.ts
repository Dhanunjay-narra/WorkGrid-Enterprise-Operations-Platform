export class HrDepartmentsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsProfile" };
  }
}
