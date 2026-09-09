export type IntRateLimitsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsProfileStateMachine {
  private allowedTransitions: Record<IntRateLimitsProfileState, IntRateLimitsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsProfileState, to: IntRateLimitsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsProfileState, to: IntRateLimitsProfileState): IntRateLimitsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
