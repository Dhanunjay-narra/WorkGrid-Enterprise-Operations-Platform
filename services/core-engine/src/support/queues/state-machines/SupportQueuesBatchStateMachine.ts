export type SupportQueuesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesBatchStateMachine {
  private allowedTransitions: Record<SupportQueuesBatchState, SupportQueuesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesBatchState, to: SupportQueuesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesBatchState, to: SupportQueuesBatchState): SupportQueuesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
