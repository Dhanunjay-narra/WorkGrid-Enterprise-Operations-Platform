export type IntSlackRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackRuleStateMachine {
  private allowedTransitions: Record<IntSlackRuleState, IntSlackRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackRuleState, to: IntSlackRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackRuleState, to: IntSlackRuleState): IntSlackRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackRule: " + from + " -> " + to);
    }
    return to;
  }
}
