export type IntRateLimitsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsEventStateMachine {
  private allowedTransitions: Record<IntRateLimitsEventState, IntRateLimitsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsEventState, to: IntRateLimitsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsEventState, to: IntRateLimitsEventState): IntRateLimitsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
