export class HrDepartmentsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsEntry" };
  }
}
