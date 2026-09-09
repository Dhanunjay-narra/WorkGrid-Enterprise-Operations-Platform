export type DmsOcrQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrQueueStateMachine {
  private allowedTransitions: Record<DmsOcrQueueState, DmsOcrQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrQueueState, to: DmsOcrQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrQueueState, to: DmsOcrQueueState): DmsOcrQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrQueue: " + from + " -> " + to);
    }
    return to;
  }
}
