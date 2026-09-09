export type FinanceTaxesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesRuleStateMachine {
  private allowedTransitions: Record<FinanceTaxesRuleState, FinanceTaxesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesRuleState, to: FinanceTaxesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesRuleState, to: FinanceTaxesRuleState): FinanceTaxesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesRule: " + from + " -> " + to);
    }
    return to;
  }
}
