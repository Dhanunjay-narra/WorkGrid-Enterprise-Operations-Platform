export type HrEmployeesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesPayloadStateMachine {
  private allowedTransitions: Record<HrEmployeesPayloadState, HrEmployeesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesPayloadState, to: HrEmployeesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesPayloadState, to: HrEmployeesPayloadState): HrEmployeesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
