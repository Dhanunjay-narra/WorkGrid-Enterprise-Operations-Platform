export type HrPerformanceMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceMappingStateMachine {
  private allowedTransitions: Record<HrPerformanceMappingState, HrPerformanceMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceMappingState, to: HrPerformanceMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceMappingState, to: HrPerformanceMappingState): HrPerformanceMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceMapping: " + from + " -> " + to);
    }
    return to;
  }
}
