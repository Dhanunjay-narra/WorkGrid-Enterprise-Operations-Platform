export class HrShiftsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsTask" };
  }
}
