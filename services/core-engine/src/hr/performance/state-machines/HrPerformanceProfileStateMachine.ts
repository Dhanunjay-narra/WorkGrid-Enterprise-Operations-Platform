export type HrPerformanceProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceProfileStateMachine {
  private allowedTransitions: Record<HrPerformanceProfileState, HrPerformanceProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceProfileState, to: HrPerformanceProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceProfileState, to: HrPerformanceProfileState): HrPerformanceProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceProfile: " + from + " -> " + to);
    }
    return to;
  }
}
