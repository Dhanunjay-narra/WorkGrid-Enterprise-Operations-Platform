export type IotTelemetryPacketState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotTelemetryPacketStateMachine {
  private validTransitions: Record<IotTelemetryPacketState, IotTelemetryPacketState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotTelemetryPacketState, next: IotTelemetryPacketState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotTelemetryPacketState, next: IotTelemetryPacketState): IotTelemetryPacketState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotTelemetryPacket: from " + current + " to " + next);
    }
    return next;
  }
}
