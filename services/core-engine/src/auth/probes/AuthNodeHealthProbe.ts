export class AuthNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthNode" };
  }
}
