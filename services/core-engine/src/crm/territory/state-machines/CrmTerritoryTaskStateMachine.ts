export type CrmTerritoryTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryTaskStateMachine {
  private allowedTransitions: Record<CrmTerritoryTaskState, CrmTerritoryTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryTaskState, to: CrmTerritoryTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryTaskState, to: CrmTerritoryTaskState): CrmTerritoryTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryTask: " + from + " -> " + to);
    }
    return to;
  }
}
