export type EventsDeadletterScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterScheduleStateMachine {
  private allowedTransitions: Record<EventsDeadletterScheduleState, EventsDeadletterScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterScheduleState, to: EventsDeadletterScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterScheduleState, to: EventsDeadletterScheduleState): EventsDeadletterScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
