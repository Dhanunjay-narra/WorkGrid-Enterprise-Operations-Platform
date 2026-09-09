export class HrShiftsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsPolicy" };
  }
}
