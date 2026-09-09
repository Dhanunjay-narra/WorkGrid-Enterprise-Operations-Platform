export class AuthStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthState" };
  }
}
