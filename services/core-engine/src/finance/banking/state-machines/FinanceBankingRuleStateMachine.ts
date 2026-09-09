export type FinanceBankingRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingRuleStateMachine {
  private allowedTransitions: Record<FinanceBankingRuleState, FinanceBankingRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingRuleState, to: FinanceBankingRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingRuleState, to: FinanceBankingRuleState): FinanceBankingRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingRule: " + from + " -> " + to);
    }
    return to;
  }
}
