export type SupportTicketsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsScheduleStateMachine {
  private allowedTransitions: Record<SupportTicketsScheduleState, SupportTicketsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsScheduleState, to: SupportTicketsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsScheduleState, to: SupportTicketsScheduleState): SupportTicketsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
