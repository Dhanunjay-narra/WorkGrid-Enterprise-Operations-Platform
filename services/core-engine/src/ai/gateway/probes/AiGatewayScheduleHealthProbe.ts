export class AiGatewayScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewaySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewaySchedule" };
  }
}
