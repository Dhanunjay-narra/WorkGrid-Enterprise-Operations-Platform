export type HrShiftsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsMappingStateMachine {
  private allowedTransitions: Record<HrShiftsMappingState, HrShiftsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsMappingState, to: HrShiftsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsMappingState, to: HrShiftsMappingState): HrShiftsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
