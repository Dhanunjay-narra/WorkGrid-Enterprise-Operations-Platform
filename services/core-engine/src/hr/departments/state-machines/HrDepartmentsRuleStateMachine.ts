export type HrDepartmentsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsRuleStateMachine {
  private allowedTransitions: Record<HrDepartmentsRuleState, HrDepartmentsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsRuleState, to: HrDepartmentsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsRuleState, to: HrDepartmentsRuleState): HrDepartmentsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsRule: " + from + " -> " + to);
    }
    return to;
  }
}
