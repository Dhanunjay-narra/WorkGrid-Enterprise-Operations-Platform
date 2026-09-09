export type CrmDealsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsScheduleStateMachine {
  private allowedTransitions: Record<CrmDealsScheduleState, CrmDealsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsScheduleState, to: CrmDealsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsScheduleState, to: CrmDealsScheduleState): CrmDealsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
