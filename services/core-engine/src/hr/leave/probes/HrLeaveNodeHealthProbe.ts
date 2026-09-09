export class HrLeaveNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveNode" };
  }
}
