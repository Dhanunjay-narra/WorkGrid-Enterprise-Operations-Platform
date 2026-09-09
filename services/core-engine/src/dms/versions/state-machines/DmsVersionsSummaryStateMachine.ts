export type DmsVersionsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsSummaryStateMachine {
  private allowedTransitions: Record<DmsVersionsSummaryState, DmsVersionsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsSummaryState, to: DmsVersionsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsSummaryState, to: DmsVersionsSummaryState): DmsVersionsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
