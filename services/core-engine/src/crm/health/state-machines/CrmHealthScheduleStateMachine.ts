export type CrmHealthScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthScheduleStateMachine {
  private allowedTransitions: Record<CrmHealthScheduleState, CrmHealthScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthScheduleState, to: CrmHealthScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthScheduleState, to: CrmHealthScheduleState): CrmHealthScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
