export type IntStripeRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeRuleStateMachine {
  private allowedTransitions: Record<IntStripeRuleState, IntStripeRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeRuleState, to: IntStripeRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeRuleState, to: IntStripeRuleState): IntStripeRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeRule: " + from + " -> " + to);
    }
    return to;
  }
}
