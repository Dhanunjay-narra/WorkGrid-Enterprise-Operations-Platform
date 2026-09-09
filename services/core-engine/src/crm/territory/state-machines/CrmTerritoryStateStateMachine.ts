export type CrmTerritoryStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryStateStateMachine {
  private allowedTransitions: Record<CrmTerritoryStateState, CrmTerritoryStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryStateState, to: CrmTerritoryStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryStateState, to: CrmTerritoryStateState): CrmTerritoryStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryState: " + from + " -> " + to);
    }
    return to;
  }
}
