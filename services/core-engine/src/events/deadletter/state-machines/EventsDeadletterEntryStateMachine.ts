export type EventsDeadletterEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterEntryStateMachine {
  private allowedTransitions: Record<EventsDeadletterEntryState, EventsDeadletterEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterEntryState, to: EventsDeadletterEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterEntryState, to: EventsDeadletterEntryState): EventsDeadletterEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterEntry: " + from + " -> " + to);
    }
    return to;
  }
}
