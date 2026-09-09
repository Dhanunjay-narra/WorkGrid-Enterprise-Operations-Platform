export type DmsChunksSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksSessionStateMachine {
  private allowedTransitions: Record<DmsChunksSessionState, DmsChunksSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksSessionState, to: DmsChunksSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksSessionState, to: DmsChunksSessionState): DmsChunksSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksSession: " + from + " -> " + to);
    }
    return to;
  }
}
