export type SupportCsatBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatBatchStateMachine {
  private allowedTransitions: Record<SupportCsatBatchState, SupportCsatBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatBatchState, to: SupportCsatBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatBatchState, to: SupportCsatBatchState): SupportCsatBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatBatch: " + from + " -> " + to);
    }
    return to;
  }
}
