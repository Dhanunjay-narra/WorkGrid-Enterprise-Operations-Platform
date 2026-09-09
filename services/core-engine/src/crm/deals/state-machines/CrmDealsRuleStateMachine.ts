export type CrmDealsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsRuleStateMachine {
  private allowedTransitions: Record<CrmDealsRuleState, CrmDealsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsRuleState, to: CrmDealsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsRuleState, to: CrmDealsRuleState): CrmDealsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsRule: " + from + " -> " + to);
    }
    return to;
  }
}
