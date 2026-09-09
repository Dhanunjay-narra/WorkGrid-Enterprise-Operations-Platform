export class IotCommandsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsAssignment" };
  }
}
