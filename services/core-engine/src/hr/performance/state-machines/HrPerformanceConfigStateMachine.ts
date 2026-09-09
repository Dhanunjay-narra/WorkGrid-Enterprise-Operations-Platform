export type HrPerformanceConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceConfigStateMachine {
  private allowedTransitions: Record<HrPerformanceConfigState, HrPerformanceConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceConfigState, to: HrPerformanceConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceConfigState, to: HrPerformanceConfigState): HrPerformanceConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceConfig: " + from + " -> " + to);
    }
    return to;
  }
}
