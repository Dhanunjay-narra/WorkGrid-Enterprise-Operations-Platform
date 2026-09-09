export type CrmContactsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsBatchStateMachine {
  private allowedTransitions: Record<CrmContactsBatchState, CrmContactsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsBatchState, to: CrmContactsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsBatchState, to: CrmContactsBatchState): CrmContactsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
