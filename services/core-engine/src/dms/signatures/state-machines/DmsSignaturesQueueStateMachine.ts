export type DmsSignaturesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesQueueStateMachine {
  private allowedTransitions: Record<DmsSignaturesQueueState, DmsSignaturesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesQueueState, to: DmsSignaturesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesQueueState, to: DmsSignaturesQueueState): DmsSignaturesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
