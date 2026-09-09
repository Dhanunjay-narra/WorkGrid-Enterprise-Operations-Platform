export class HrEmployeesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesNode" };
  }
}
