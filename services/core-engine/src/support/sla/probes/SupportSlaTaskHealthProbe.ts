export class SupportSlaTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaTask" };
  }
}
