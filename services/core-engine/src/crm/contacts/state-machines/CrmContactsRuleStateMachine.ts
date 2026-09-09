export type CrmContactsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsRuleStateMachine {
  private allowedTransitions: Record<CrmContactsRuleState, CrmContactsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsRuleState, to: CrmContactsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsRuleState, to: CrmContactsRuleState): CrmContactsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsRule: " + from + " -> " + to);
    }
    return to;
  }
}
