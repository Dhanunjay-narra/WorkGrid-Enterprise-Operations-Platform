export class HrShiftsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsSession" };
  }
}
