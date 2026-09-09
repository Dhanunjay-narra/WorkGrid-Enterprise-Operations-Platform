export type EventsPartitionsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsConfigStateMachine {
  private allowedTransitions: Record<EventsPartitionsConfigState, EventsPartitionsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsConfigState, to: EventsPartitionsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsConfigState, to: EventsPartitionsConfigState): EventsPartitionsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
