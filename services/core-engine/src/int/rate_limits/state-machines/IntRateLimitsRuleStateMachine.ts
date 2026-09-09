export type IntRateLimitsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsRuleStateMachine {
  private allowedTransitions: Record<IntRateLimitsRuleState, IntRateLimitsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsRuleState, to: IntRateLimitsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsRuleState, to: IntRateLimitsRuleState): IntRateLimitsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsRule: " + from + " -> " + to);
    }
    return to;
  }
}
