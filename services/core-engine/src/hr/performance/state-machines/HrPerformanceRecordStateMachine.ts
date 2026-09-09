export type HrPerformanceRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceRecordStateMachine {
  private allowedTransitions: Record<HrPerformanceRecordState, HrPerformanceRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceRecordState, to: HrPerformanceRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceRecordState, to: HrPerformanceRecordState): HrPerformanceRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceRecord: " + from + " -> " + to);
    }
    return to;
  }
}
