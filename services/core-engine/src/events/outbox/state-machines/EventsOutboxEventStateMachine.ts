export type EventsOutboxEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxEventStateMachine {
  private allowedTransitions: Record<EventsOutboxEventState, EventsOutboxEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxEventState, to: EventsOutboxEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxEventState, to: EventsOutboxEventState): EventsOutboxEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxEvent: " + from + " -> " + to);
    }
    return to;
  }
}
