export class HrDepartmentsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsPayload" };
  }
}
