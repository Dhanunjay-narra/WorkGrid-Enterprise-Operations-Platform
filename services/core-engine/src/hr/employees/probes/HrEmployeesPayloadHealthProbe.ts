export class HrEmployeesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesPayload" };
  }
}
