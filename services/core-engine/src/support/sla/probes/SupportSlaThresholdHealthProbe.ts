export class SupportSlaThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaThreshold" };
  }
}
