export type IntSalesforceRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceRuleStateMachine {
  private allowedTransitions: Record<IntSalesforceRuleState, IntSalesforceRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceRuleState, to: IntSalesforceRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceRuleState, to: IntSalesforceRuleState): IntSalesforceRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceRule: " + from + " -> " + to);
    }
    return to;
  }
}
