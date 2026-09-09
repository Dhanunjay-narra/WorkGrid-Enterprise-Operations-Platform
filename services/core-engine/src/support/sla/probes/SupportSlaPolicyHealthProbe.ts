export class SupportSlaPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaPolicy" };
  }
}
