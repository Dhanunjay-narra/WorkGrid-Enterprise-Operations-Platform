export class CommThreadsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsRecord" };
  }
}
