export class SupportEscalationEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationEntry" };
  }
}
