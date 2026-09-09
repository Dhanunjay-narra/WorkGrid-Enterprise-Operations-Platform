export class IntOauthReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthReport" };
  }
}
