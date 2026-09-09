export type IntRateLimitsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsPolicyStateMachine {
  private allowedTransitions: Record<IntRateLimitsPolicyState, IntRateLimitsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsPolicyState, to: IntRateLimitsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsPolicyState, to: IntRateLimitsPolicyState): IntRateLimitsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
