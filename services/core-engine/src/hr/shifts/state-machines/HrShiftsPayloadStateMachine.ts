export type HrShiftsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsPayloadStateMachine {
  private allowedTransitions: Record<HrShiftsPayloadState, HrShiftsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsPayloadState, to: HrShiftsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsPayloadState, to: HrShiftsPayloadState): HrShiftsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
