export type DmsChunksConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksConfigStateMachine {
  private allowedTransitions: Record<DmsChunksConfigState, DmsChunksConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksConfigState, to: DmsChunksConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksConfigState, to: DmsChunksConfigState): DmsChunksConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksConfig: " + from + " -> " + to);
    }
    return to;
  }
}
