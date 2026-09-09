export class AuthRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthRecord" };
  }
}
