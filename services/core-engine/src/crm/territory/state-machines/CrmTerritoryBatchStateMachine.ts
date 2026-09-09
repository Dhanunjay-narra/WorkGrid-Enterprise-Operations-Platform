export type CrmTerritoryBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryBatchStateMachine {
  private allowedTransitions: Record<CrmTerritoryBatchState, CrmTerritoryBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryBatchState, to: CrmTerritoryBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryBatchState, to: CrmTerritoryBatchState): CrmTerritoryBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryBatch: " + from + " -> " + to);
    }
    return to;
  }
}
