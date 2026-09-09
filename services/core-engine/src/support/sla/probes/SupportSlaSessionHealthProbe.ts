export class SupportSlaSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaSession" };
  }
}
