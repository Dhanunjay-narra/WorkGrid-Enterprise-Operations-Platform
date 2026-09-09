export type CrmHealthBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthBatchStateMachine {
  private allowedTransitions: Record<CrmHealthBatchState, CrmHealthBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthBatchState, to: CrmHealthBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthBatchState, to: CrmHealthBatchState): CrmHealthBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthBatch: " + from + " -> " + to);
    }
    return to;
  }
}
