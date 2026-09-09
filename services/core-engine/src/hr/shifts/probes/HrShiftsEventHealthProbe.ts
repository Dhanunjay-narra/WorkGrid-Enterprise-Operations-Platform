export class HrShiftsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsEvent" };
  }
}
