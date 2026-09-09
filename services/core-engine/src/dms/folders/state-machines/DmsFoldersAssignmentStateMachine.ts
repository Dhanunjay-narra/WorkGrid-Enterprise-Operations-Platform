export type DmsFoldersAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersAssignmentStateMachine {
  private allowedTransitions: Record<DmsFoldersAssignmentState, DmsFoldersAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersAssignmentState, to: DmsFoldersAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersAssignmentState, to: DmsFoldersAssignmentState): DmsFoldersAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
