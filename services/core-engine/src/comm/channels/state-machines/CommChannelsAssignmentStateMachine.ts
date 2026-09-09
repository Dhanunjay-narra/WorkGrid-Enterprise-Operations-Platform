export type CommChannelsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsAssignmentStateMachine {
  private allowedTransitions: Record<CommChannelsAssignmentState, CommChannelsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsAssignmentState, to: CommChannelsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsAssignmentState, to: CommChannelsAssignmentState): CommChannelsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
