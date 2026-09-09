export type DmsChunksNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksNodeStateMachine {
  private allowedTransitions: Record<DmsChunksNodeState, DmsChunksNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksNodeState, to: DmsChunksNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksNodeState, to: DmsChunksNodeState): DmsChunksNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksNode: " + from + " -> " + to);
    }
    return to;
  }
}
