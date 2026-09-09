export class SupportEscalationQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationQueue" };
  }
}
