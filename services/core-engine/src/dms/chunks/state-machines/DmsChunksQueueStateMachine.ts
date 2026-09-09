export type DmsChunksQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksQueueStateMachine {
  private allowedTransitions: Record<DmsChunksQueueState, DmsChunksQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksQueueState, to: DmsChunksQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksQueueState, to: DmsChunksQueueState): DmsChunksQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksQueue: " + from + " -> " + to);
    }
    return to;
  }
}
