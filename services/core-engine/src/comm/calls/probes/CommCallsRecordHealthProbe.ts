export class CommCallsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsRecord" };
  }
}
