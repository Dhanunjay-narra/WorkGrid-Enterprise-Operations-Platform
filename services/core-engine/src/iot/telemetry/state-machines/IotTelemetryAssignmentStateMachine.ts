export type IotTelemetryAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryAssignmentStateMachine {
  private allowedTransitions: Record<IotTelemetryAssignmentState, IotTelemetryAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryAssignmentState, to: IotTelemetryAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryAssignmentState, to: IotTelemetryAssignmentState): IotTelemetryAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
