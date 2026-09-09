export type CrmTerritoryItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryItemStateMachine {
  private allowedTransitions: Record<CrmTerritoryItemState, CrmTerritoryItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryItemState, to: CrmTerritoryItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryItemState, to: CrmTerritoryItemState): CrmTerritoryItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryItem: " + from + " -> " + to);
    }
    return to;
  }
}
