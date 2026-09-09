export type CrmTerritoryNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryNodeStateMachine {
  private allowedTransitions: Record<CrmTerritoryNodeState, CrmTerritoryNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryNodeState, to: CrmTerritoryNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryNodeState, to: CrmTerritoryNodeState): CrmTerritoryNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryNode: " + from + " -> " + to);
    }
    return to;
  }
}
