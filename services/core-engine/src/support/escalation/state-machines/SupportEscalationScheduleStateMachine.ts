export type SupportEscalationScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationScheduleStateMachine {
  private allowedTransitions: Record<SupportEscalationScheduleState, SupportEscalationScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationScheduleState, to: SupportEscalationScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationScheduleState, to: SupportEscalationScheduleState): SupportEscalationScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
