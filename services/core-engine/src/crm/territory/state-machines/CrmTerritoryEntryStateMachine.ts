export type CrmTerritoryEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryEntryStateMachine {
  private allowedTransitions: Record<CrmTerritoryEntryState, CrmTerritoryEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryEntryState, to: CrmTerritoryEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryEntryState, to: CrmTerritoryEntryState): CrmTerritoryEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryEntry: " + from + " -> " + to);
    }
    return to;
  }
}
