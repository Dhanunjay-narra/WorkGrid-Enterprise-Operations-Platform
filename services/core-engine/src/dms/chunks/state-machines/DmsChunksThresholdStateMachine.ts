export type DmsChunksThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksThresholdStateMachine {
  private allowedTransitions: Record<DmsChunksThresholdState, DmsChunksThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksThresholdState, to: DmsChunksThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksThresholdState, to: DmsChunksThresholdState): DmsChunksThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
