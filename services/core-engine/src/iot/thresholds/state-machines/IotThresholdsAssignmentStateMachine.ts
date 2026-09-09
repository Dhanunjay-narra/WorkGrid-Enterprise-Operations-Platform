export type IotThresholdsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsAssignmentStateMachine {
  private allowedTransitions: Record<IotThresholdsAssignmentState, IotThresholdsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsAssignmentState, to: IotThresholdsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsAssignmentState, to: IotThresholdsAssignmentState): IotThresholdsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
