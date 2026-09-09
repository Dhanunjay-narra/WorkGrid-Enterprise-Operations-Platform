export type HrDepartmentsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsPayloadStateMachine {
  private allowedTransitions: Record<HrDepartmentsPayloadState, HrDepartmentsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsPayloadState, to: HrDepartmentsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsPayloadState, to: HrDepartmentsPayloadState): HrDepartmentsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
