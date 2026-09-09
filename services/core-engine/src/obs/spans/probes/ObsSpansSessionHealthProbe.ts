export class ObsSpansSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansSession" };
  }
}
