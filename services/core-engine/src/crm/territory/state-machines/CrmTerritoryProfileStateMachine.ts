export type CrmTerritoryProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryProfileStateMachine {
  private allowedTransitions: Record<CrmTerritoryProfileState, CrmTerritoryProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryProfileState, to: CrmTerritoryProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryProfileState, to: CrmTerritoryProfileState): CrmTerritoryProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryProfile: " + from + " -> " + to);
    }
    return to;
  }
}
