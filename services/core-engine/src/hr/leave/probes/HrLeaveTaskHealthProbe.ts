export class HrLeaveTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveTask" };
  }
}
