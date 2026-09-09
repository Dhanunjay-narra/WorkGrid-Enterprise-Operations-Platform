export type DmsChunksSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksSummaryStateMachine {
  private allowedTransitions: Record<DmsChunksSummaryState, DmsChunksSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksSummaryState, to: DmsChunksSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksSummaryState, to: DmsChunksSummaryState): DmsChunksSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksSummary: " + from + " -> " + to);
    }
    return to;
  }
}
