export type DmsChunksStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksStateStateMachine {
  private allowedTransitions: Record<DmsChunksStateState, DmsChunksStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksStateState, to: DmsChunksStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksStateState, to: DmsChunksStateState): DmsChunksStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksState: " + from + " -> " + to);
    }
    return to;
  }
}
