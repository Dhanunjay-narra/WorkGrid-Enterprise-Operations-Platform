export class ObsSpansTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansTransaction" };
  }
}
