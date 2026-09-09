export class CommMessagesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesThreshold" };
  }
}
