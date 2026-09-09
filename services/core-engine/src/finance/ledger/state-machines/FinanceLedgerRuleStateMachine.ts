export type FinanceLedgerRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerRuleStateMachine {
  private allowedTransitions: Record<FinanceLedgerRuleState, FinanceLedgerRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerRuleState, to: FinanceLedgerRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerRuleState, to: FinanceLedgerRuleState): FinanceLedgerRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerRule: " + from + " -> " + to);
    }
    return to;
  }
}
