export class HrLeaveTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveTransaction" };
  }
}
