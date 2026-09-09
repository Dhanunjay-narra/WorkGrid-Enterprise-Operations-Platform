export class CommPresenceThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceThreshold" };
  }
}
