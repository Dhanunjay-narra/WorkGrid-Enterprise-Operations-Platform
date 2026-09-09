export type EventsPartitionsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsScheduleStateMachine {
  private allowedTransitions: Record<EventsPartitionsScheduleState, EventsPartitionsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsScheduleState, to: EventsPartitionsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsScheduleState, to: EventsPartitionsScheduleState): EventsPartitionsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
