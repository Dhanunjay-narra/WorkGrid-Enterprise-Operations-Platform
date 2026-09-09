export class SupportCsatProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatProfile" };
  }
}
