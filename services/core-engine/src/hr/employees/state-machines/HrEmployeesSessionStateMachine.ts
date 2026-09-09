export type HrEmployeesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesSessionStateMachine {
  private allowedTransitions: Record<HrEmployeesSessionState, HrEmployeesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesSessionState, to: HrEmployeesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesSessionState, to: HrEmployeesSessionState): HrEmployeesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesSession: " + from + " -> " + to);
    }
    return to;
  }
}
