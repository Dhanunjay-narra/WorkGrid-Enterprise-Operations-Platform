export type HrShiftsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsConfigStateMachine {
  private allowedTransitions: Record<HrShiftsConfigState, HrShiftsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsConfigState, to: HrShiftsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsConfigState, to: HrShiftsConfigState): HrShiftsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
