export type EventsPartitionsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsSessionStateMachine {
  private allowedTransitions: Record<EventsPartitionsSessionState, EventsPartitionsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsSessionState, to: EventsPartitionsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsSessionState, to: EventsPartitionsSessionState): EventsPartitionsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsSession: " + from + " -> " + to);
    }
    return to;
  }
}
