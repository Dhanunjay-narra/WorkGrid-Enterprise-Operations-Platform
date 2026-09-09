export type CrmLeadsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsRuleStateMachine {
  private allowedTransitions: Record<CrmLeadsRuleState, CrmLeadsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsRuleState, to: CrmLeadsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsRuleState, to: CrmLeadsRuleState): CrmLeadsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsRule: " + from + " -> " + to);
    }
    return to;
  }
}
