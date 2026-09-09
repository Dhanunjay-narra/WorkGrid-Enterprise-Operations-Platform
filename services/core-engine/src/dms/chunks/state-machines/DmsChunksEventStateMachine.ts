export type DmsChunksEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksEventStateMachine {
  private allowedTransitions: Record<DmsChunksEventState, DmsChunksEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksEventState, to: DmsChunksEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksEventState, to: DmsChunksEventState): DmsChunksEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksEvent: " + from + " -> " + to);
    }
    return to;
  }
}
