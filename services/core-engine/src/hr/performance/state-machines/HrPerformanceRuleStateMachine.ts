export type HrPerformanceRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceRuleStateMachine {
  private allowedTransitions: Record<HrPerformanceRuleState, HrPerformanceRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceRuleState, to: HrPerformanceRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceRuleState, to: HrPerformanceRuleState): HrPerformanceRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceRule: " + from + " -> " + to);
    }
    return to;
  }
}
