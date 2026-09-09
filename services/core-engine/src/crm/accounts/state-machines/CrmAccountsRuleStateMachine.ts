export type CrmAccountsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsRuleStateMachine {
  private allowedTransitions: Record<CrmAccountsRuleState, CrmAccountsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsRuleState, to: CrmAccountsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsRuleState, to: CrmAccountsRuleState): CrmAccountsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsRule: " + from + " -> " + to);
    }
    return to;
  }
}
