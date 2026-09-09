export type IntRateLimitsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsConfigStateMachine {
  private allowedTransitions: Record<IntRateLimitsConfigState, IntRateLimitsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsConfigState, to: IntRateLimitsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsConfigState, to: IntRateLimitsConfigState): IntRateLimitsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
