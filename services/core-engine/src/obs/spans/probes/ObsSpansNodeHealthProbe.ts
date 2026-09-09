export class ObsSpansNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansNode" };
  }
}
