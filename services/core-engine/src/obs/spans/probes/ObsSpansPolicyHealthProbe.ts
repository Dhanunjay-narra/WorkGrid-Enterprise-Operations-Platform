export class ObsSpansPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansPolicy" };
  }
}
