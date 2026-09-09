export type EventsDeadletterStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterStateStateMachine {
  private allowedTransitions: Record<EventsDeadletterStateState, EventsDeadletterStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterStateState, to: EventsDeadletterStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterStateState, to: EventsDeadletterStateState): EventsDeadletterStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterState: " + from + " -> " + to);
    }
    return to;
  }
}
