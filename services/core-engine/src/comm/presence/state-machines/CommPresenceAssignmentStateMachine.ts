export type CommPresenceAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceAssignmentStateMachine {
  private allowedTransitions: Record<CommPresenceAssignmentState, CommPresenceAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceAssignmentState, to: CommPresenceAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceAssignmentState, to: CommPresenceAssignmentState): CommPresenceAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
