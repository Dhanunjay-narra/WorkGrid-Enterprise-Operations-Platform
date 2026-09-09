export class HrLeaveConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveConfig" };
  }
}
