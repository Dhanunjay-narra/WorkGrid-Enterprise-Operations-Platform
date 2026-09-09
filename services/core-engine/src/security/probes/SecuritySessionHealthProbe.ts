export class SecuritySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecuritySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecuritySession" };
  }
}
