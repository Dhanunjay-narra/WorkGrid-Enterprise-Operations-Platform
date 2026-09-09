export type HrPerformanceEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceEntryStateMachine {
  private allowedTransitions: Record<HrPerformanceEntryState, HrPerformanceEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceEntryState, to: HrPerformanceEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceEntryState, to: HrPerformanceEntryState): HrPerformanceEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceEntry: " + from + " -> " + to);
    }
    return to;
  }
}
