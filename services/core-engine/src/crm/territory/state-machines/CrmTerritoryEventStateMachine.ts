export type CrmTerritoryEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryEventStateMachine {
  private allowedTransitions: Record<CrmTerritoryEventState, CrmTerritoryEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryEventState, to: CrmTerritoryEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryEventState, to: CrmTerritoryEventState): CrmTerritoryEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryEvent: " + from + " -> " + to);
    }
    return to;
  }
}
