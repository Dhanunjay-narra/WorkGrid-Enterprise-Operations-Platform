export class ObsLoggingProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingProfile" };
  }
}
