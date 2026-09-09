export class ObsProfilingTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingTransaction" };
  }
}
