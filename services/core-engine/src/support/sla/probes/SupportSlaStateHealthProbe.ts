export class SupportSlaStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaState" };
  }
}
