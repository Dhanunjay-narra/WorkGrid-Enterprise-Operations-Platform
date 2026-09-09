export class ObsProbesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesTransaction" };
  }
}
