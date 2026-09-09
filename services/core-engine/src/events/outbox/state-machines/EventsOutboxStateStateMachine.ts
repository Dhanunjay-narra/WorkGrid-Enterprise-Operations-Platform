export type EventsOutboxStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxStateStateMachine {
  private allowedTransitions: Record<EventsOutboxStateState, EventsOutboxStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxStateState, to: EventsOutboxStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxStateState, to: EventsOutboxStateState): EventsOutboxStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxState: " + from + " -> " + to);
    }
    return to;
  }
}
