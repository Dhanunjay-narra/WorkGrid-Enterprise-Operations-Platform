export type CrmTerritoryMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryMappingStateMachine {
  private allowedTransitions: Record<CrmTerritoryMappingState, CrmTerritoryMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryMappingState, to: CrmTerritoryMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryMappingState, to: CrmTerritoryMappingState): CrmTerritoryMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryMapping: " + from + " -> " + to);
    }
    return to;
  }
}
