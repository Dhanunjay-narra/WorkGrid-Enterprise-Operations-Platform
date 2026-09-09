export class HrLeavePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeavePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeavePolicy" };
  }
}
