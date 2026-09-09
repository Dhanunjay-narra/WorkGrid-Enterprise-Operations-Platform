export type EventsOutboxSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxSessionStateMachine {
  private allowedTransitions: Record<EventsOutboxSessionState, EventsOutboxSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxSessionState, to: EventsOutboxSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxSessionState, to: EventsOutboxSessionState): EventsOutboxSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxSession: " + from + " -> " + to);
    }
    return to;
  }
}
