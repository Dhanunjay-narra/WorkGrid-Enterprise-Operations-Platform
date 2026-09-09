export type DmsChunksEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksEntryStateMachine {
  private allowedTransitions: Record<DmsChunksEntryState, DmsChunksEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksEntryState, to: DmsChunksEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksEntryState, to: DmsChunksEntryState): DmsChunksEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksEntry: " + from + " -> " + to);
    }
    return to;
  }
}
