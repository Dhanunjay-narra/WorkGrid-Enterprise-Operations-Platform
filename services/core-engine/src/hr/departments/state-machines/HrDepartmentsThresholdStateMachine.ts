export type HrDepartmentsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsThresholdStateMachine {
  private allowedTransitions: Record<HrDepartmentsThresholdState, HrDepartmentsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsThresholdState, to: HrDepartmentsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsThresholdState, to: HrDepartmentsThresholdState): HrDepartmentsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
