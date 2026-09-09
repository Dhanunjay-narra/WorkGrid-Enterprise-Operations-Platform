export type TenancyBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyBatchStateMachine {
  private allowedTransitions: Record<TenancyBatchState, TenancyBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyBatchState, to: TenancyBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyBatchState, to: TenancyBatchState): TenancyBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyBatch: " + from + " -> " + to);
    }
    return to;
  }
}
