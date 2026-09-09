export type IotTelemetryNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryNodeStateMachine {
  private allowedTransitions: Record<IotTelemetryNodeState, IotTelemetryNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryNodeState, to: IotTelemetryNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryNodeState, to: IotTelemetryNodeState): IotTelemetryNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryNode: " + from + " -> " + to);
    }
    return to;
  }
}
