export type EventsOutboxConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxConfigStateMachine {
  private allowedTransitions: Record<EventsOutboxConfigState, EventsOutboxConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxConfigState, to: EventsOutboxConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxConfigState, to: EventsOutboxConfigState): EventsOutboxConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxConfig: " + from + " -> " + to);
    }
    return to;
  }
}
