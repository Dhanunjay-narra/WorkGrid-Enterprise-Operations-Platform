export type CrmContactsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsScheduleStateMachine {
  private allowedTransitions: Record<CrmContactsScheduleState, CrmContactsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsScheduleState, to: CrmContactsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsScheduleState, to: CrmContactsScheduleState): CrmContactsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
