export type IotFirmwareAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareAssignmentStateMachine {
  private allowedTransitions: Record<IotFirmwareAssignmentState, IotFirmwareAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareAssignmentState, to: IotFirmwareAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareAssignmentState, to: IotFirmwareAssignmentState): IotFirmwareAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
