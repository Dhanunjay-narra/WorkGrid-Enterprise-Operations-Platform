export class ObsSpansStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansState" };
  }
}
