export type EventsPartitionsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsEntryStateMachine {
  private allowedTransitions: Record<EventsPartitionsEntryState, EventsPartitionsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsEntryState, to: EventsPartitionsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsEntryState, to: EventsPartitionsEntryState): EventsPartitionsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
