export type HrLeavePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeavePayloadStateMachine {
  private allowedTransitions: Record<HrLeavePayloadState, HrLeavePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeavePayloadState, to: HrLeavePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeavePayloadState, to: HrLeavePayloadState): HrLeavePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeavePayload: " + from + " -> " + to);
    }
    return to;
  }
}
