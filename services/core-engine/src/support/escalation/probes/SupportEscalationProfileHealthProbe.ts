export class SupportEscalationProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationProfile" };
  }
}
