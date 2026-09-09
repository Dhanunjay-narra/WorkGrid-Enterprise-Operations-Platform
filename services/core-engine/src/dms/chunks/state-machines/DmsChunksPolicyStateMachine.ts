export type DmsChunksPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksPolicyStateMachine {
  private allowedTransitions: Record<DmsChunksPolicyState, DmsChunksPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksPolicyState, to: DmsChunksPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksPolicyState, to: DmsChunksPolicyState): DmsChunksPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
