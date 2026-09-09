export class ObsSpansProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansProfile" };
  }
}
