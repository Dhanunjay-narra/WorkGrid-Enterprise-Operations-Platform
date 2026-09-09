export type HrPayrollMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollMappingStateMachine {
  private allowedTransitions: Record<HrPayrollMappingState, HrPayrollMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollMappingState, to: HrPayrollMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollMappingState, to: HrPayrollMappingState): HrPayrollMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollMapping: " + from + " -> " + to);
    }
    return to;
  }
}
