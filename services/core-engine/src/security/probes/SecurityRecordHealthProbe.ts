export class SecurityRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityRecord" };
  }
}
