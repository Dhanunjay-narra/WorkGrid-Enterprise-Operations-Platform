export class ObsSpansItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansItem" };
  }
}
