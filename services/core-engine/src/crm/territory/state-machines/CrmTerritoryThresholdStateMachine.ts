export type CrmTerritoryThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryThresholdStateMachine {
  private allowedTransitions: Record<CrmTerritoryThresholdState, CrmTerritoryThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryThresholdState, to: CrmTerritoryThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryThresholdState, to: CrmTerritoryThresholdState): CrmTerritoryThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
