export type HrDepartmentsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsSessionStateMachine {
  private allowedTransitions: Record<HrDepartmentsSessionState, HrDepartmentsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsSessionState, to: HrDepartmentsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsSessionState, to: HrDepartmentsSessionState): HrDepartmentsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsSession: " + from + " -> " + to);
    }
    return to;
  }
}
