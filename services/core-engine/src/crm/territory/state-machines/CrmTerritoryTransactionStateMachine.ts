export type CrmTerritoryTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryTransactionStateMachine {
  private allowedTransitions: Record<CrmTerritoryTransactionState, CrmTerritoryTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryTransactionState, to: CrmTerritoryTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryTransactionState, to: CrmTerritoryTransactionState): CrmTerritoryTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
