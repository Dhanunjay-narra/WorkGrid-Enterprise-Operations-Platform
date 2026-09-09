export type DmsChunksBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksBatchStateMachine {
  private allowedTransitions: Record<DmsChunksBatchState, DmsChunksBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksBatchState, to: DmsChunksBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksBatchState, to: DmsChunksBatchState): DmsChunksBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksBatch: " + from + " -> " + to);
    }
    return to;
  }
}
