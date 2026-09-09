export type HrPayrollNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollNodeStateMachine {
  private allowedTransitions: Record<HrPayrollNodeState, HrPayrollNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollNodeState, to: HrPayrollNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollNodeState, to: HrPayrollNodeState): HrPayrollNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollNode: " + from + " -> " + to);
    }
    return to;
  }
}
