export class ObsTracingPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingPolicy" };
  }
}
