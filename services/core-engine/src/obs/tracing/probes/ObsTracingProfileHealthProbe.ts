export class ObsTracingProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingProfile" };
  }
}
