export class SupportEscalationTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationTask" };
  }
}
