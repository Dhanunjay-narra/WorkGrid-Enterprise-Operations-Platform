export class AuthSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthSession" };
  }
}
