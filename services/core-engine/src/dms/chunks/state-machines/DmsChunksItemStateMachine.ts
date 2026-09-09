export type DmsChunksItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksItemStateMachine {
  private allowedTransitions: Record<DmsChunksItemState, DmsChunksItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksItemState, to: DmsChunksItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksItemState, to: DmsChunksItemState): DmsChunksItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksItem: " + from + " -> " + to);
    }
    return to;
  }
}
