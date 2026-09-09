export class SupportEscalationStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationState" };
  }
}
