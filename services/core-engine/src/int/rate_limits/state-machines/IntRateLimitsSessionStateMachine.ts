export type IntRateLimitsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsSessionStateMachine {
  private allowedTransitions: Record<IntRateLimitsSessionState, IntRateLimitsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsSessionState, to: IntRateLimitsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsSessionState, to: IntRateLimitsSessionState): IntRateLimitsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsSession: " + from + " -> " + to);
    }
    return to;
  }
}
