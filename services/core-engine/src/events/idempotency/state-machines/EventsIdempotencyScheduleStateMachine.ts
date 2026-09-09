export type EventsIdempotencyScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencyScheduleStateMachine {
  private allowedTransitions: Record<EventsIdempotencyScheduleState, EventsIdempotencyScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencyScheduleState, to: EventsIdempotencyScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencyScheduleState, to: EventsIdempotencyScheduleState): EventsIdempotencyScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
