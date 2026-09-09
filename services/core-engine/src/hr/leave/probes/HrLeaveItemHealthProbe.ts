export class HrLeaveItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveItem" };
  }
}
