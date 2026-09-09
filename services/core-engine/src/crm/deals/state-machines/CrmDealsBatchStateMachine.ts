export type CrmDealsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsBatchStateMachine {
  private allowedTransitions: Record<CrmDealsBatchState, CrmDealsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsBatchState, to: CrmDealsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsBatchState, to: CrmDealsBatchState): CrmDealsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
