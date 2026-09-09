export type CrmTerritoryConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryConfigStateMachine {
  private allowedTransitions: Record<CrmTerritoryConfigState, CrmTerritoryConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryConfigState, to: CrmTerritoryConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryConfigState, to: CrmTerritoryConfigState): CrmTerritoryConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryConfig: " + from + " -> " + to);
    }
    return to;
  }
}
