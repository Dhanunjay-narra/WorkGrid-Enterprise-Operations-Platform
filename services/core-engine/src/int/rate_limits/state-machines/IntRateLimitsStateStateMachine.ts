export type IntRateLimitsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsStateStateMachine {
  private allowedTransitions: Record<IntRateLimitsStateState, IntRateLimitsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsStateState, to: IntRateLimitsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsStateState, to: IntRateLimitsStateState): IntRateLimitsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsState: " + from + " -> " + to);
    }
    return to;
  }
}
