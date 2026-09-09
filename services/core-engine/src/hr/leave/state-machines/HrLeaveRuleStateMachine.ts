export type HrLeaveRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveRuleStateMachine {
  private allowedTransitions: Record<HrLeaveRuleState, HrLeaveRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveRuleState, to: HrLeaveRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveRuleState, to: HrLeaveRuleState): HrLeaveRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveRule: " + from + " -> " + to);
    }
    return to;
  }
}
