export type CrmTerritoryRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryRuleStateMachine {
  private allowedTransitions: Record<CrmTerritoryRuleState, CrmTerritoryRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryRuleState, to: CrmTerritoryRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryRuleState, to: CrmTerritoryRuleState): CrmTerritoryRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryRule: " + from + " -> " + to);
    }
    return to;
  }
}
