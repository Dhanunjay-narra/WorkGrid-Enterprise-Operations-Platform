export type EventsOutboxEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxEntryStateMachine {
  private allowedTransitions: Record<EventsOutboxEntryState, EventsOutboxEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxEntryState, to: EventsOutboxEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxEntryState, to: EventsOutboxEntryState): EventsOutboxEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxEntry: " + from + " -> " + to);
    }
    return to;
  }
}
