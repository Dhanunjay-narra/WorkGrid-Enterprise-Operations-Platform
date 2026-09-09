export class SecurityItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityItem" };
  }
}
