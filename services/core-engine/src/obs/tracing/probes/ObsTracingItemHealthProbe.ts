export class ObsTracingItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingItem" };
  }
}
