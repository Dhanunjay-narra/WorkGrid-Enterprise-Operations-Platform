export type IotAnomaliesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesAssignmentStateMachine {
  private allowedTransitions: Record<IotAnomaliesAssignmentState, IotAnomaliesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesAssignmentState, to: IotAnomaliesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesAssignmentState, to: IotAnomaliesAssignmentState): IotAnomaliesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
