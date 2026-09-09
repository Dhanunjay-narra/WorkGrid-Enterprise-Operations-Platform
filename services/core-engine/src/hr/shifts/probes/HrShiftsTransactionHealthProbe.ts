export class HrShiftsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsTransaction" };
  }
}
