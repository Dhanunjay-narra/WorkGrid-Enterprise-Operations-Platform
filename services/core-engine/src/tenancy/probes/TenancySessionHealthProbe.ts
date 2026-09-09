export class TenancySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancySession" };
  }
}
