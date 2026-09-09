export type IotCommandsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsAssignmentStateMachine {
  private allowedTransitions: Record<IotCommandsAssignmentState, IotCommandsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsAssignmentState, to: IotCommandsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsAssignmentState, to: IotCommandsAssignmentState): IotCommandsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
