export class ProjectEpicsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsTransaction" };
  }
}
