export type EventsOutboxScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxScheduleStateMachine {
  private allowedTransitions: Record<EventsOutboxScheduleState, EventsOutboxScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxScheduleState, to: EventsOutboxScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxScheduleState, to: EventsOutboxScheduleState): EventsOutboxScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
