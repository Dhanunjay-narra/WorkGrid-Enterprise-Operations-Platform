export type HrShiftsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsRuleStateMachine {
  private allowedTransitions: Record<HrShiftsRuleState, HrShiftsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsRuleState, to: HrShiftsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsRuleState, to: HrShiftsRuleState): HrShiftsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsRule: " + from + " -> " + to);
    }
    return to;
  }
}
