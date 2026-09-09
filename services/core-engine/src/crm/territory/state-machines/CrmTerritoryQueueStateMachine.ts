export type CrmTerritoryQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryQueueStateMachine {
  private allowedTransitions: Record<CrmTerritoryQueueState, CrmTerritoryQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryQueueState, to: CrmTerritoryQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryQueueState, to: CrmTerritoryQueueState): CrmTerritoryQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryQueue: " + from + " -> " + to);
    }
    return to;
  }
}
