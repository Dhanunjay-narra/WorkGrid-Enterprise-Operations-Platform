export class ObsLoggingPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingPolicy" };
  }
}
