export class ObsLoggingItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingItem" };
  }
}
