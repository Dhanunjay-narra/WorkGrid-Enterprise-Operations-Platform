export type IntRateLimitsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsAssignmentStateMachine {
  private allowedTransitions: Record<IntRateLimitsAssignmentState, IntRateLimitsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsAssignmentState, to: IntRateLimitsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsAssignmentState, to: IntRateLimitsAssignmentState): IntRateLimitsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
