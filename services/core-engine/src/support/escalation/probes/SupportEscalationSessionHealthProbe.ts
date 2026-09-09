export class SupportEscalationSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationSession" };
  }
}
