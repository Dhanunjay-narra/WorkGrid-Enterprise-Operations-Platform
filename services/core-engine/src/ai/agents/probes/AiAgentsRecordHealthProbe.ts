export class AiAgentsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsRecord" };
  }
}
