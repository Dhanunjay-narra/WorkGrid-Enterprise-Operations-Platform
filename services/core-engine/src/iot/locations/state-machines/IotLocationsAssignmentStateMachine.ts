export type IotLocationsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsAssignmentStateMachine {
  private allowedTransitions: Record<IotLocationsAssignmentState, IotLocationsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsAssignmentState, to: IotLocationsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsAssignmentState, to: IotLocationsAssignmentState): IotLocationsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
