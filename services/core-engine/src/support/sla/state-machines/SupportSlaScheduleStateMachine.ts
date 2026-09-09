export type SupportSlaScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaScheduleStateMachine {
  private allowedTransitions: Record<SupportSlaScheduleState, SupportSlaScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaScheduleState, to: SupportSlaScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaScheduleState, to: SupportSlaScheduleState): SupportSlaScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
