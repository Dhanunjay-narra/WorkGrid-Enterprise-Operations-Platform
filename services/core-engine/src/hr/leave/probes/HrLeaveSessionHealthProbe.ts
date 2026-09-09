export class HrLeaveSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveSession" };
  }
}
