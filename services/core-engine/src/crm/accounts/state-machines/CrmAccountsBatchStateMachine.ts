export type CrmAccountsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsBatchStateMachine {
  private allowedTransitions: Record<CrmAccountsBatchState, CrmAccountsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsBatchState, to: CrmAccountsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsBatchState, to: CrmAccountsBatchState): CrmAccountsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
