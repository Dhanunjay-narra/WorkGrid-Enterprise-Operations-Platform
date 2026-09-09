export type CrmTerritoryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmTerritoryStateMachine {
  private validTransitions: Record<CrmTerritoryState, CrmTerritoryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmTerritoryState, next: CrmTerritoryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmTerritoryState, next: CrmTerritoryState): CrmTerritoryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmTerritory: from " + current + " to " + next);
    }
    return next;
  }
}
