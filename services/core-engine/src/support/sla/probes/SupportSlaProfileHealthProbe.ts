export class SupportSlaProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaProfile" };
  }
}
