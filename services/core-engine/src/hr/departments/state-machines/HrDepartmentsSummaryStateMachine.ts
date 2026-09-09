export type HrDepartmentsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsSummaryStateMachine {
  private allowedTransitions: Record<HrDepartmentsSummaryState, HrDepartmentsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsSummaryState, to: HrDepartmentsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsSummaryState, to: HrDepartmentsSummaryState): HrDepartmentsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
