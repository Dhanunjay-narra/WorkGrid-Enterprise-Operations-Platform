export type FinanceBillsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsRuleStateMachine {
  private allowedTransitions: Record<FinanceBillsRuleState, FinanceBillsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsRuleState, to: FinanceBillsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsRuleState, to: FinanceBillsRuleState): FinanceBillsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsRule: " + from + " -> " + to);
    }
    return to;
  }
}
