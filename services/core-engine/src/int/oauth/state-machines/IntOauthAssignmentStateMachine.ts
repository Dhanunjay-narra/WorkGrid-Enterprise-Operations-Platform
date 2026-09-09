export type IntOauthAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthAssignmentStateMachine {
  private allowedTransitions: Record<IntOauthAssignmentState, IntOauthAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthAssignmentState, to: IntOauthAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthAssignmentState, to: IntOauthAssignmentState): IntOauthAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
